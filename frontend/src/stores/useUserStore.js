import { create } from "zustand";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,
  isRefreshing: false,

  signup: async ({ name, email, password, confirmPassword }) => {
    set({ loading: true });

    if (password !== confirmPassword) {
      set({ loading: false });
      return toast.error("Passwords do not match");
    }

    try {
      const res = await axios.post("/auth/signup", {
        name,
        email,
        password,
      });
      set({ user: res.data, loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error(
        error.response.data.message || "An error occurred during signup"
      );
    }
  },

  login: async (email, password) => {
    set({ loading: true });

    try {
      const res = await axios.post("/auth/login", { email, password });

      set({ user: res.data, loading: false });

      setAuthTimer(res.data.expiresIn);
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.message || "An error occurred");
    }
  },

  logout: async () => {
    try {
      await axios.post("/auth/logout");
      set({ user: null });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred during logout"
      );
    }
  },

  checkAuth: async () => {
    set({ checkingAuth: true });
    try {
      const response = await axios.get("/auth/profile");
      console.log(response.data);
      set({ user: response.data, checkingAuth: false });
    } catch (error) {
      console.log(error.message);
      set({ checkingAuth: false, user: null });
    }
  },

  refreshToken: async () => {
    // Prevent multiple simultaneous refresh attempts
    if (get().isRefreshing) return;

    set({ isRefreshing: true });
    try {
      const response = await axios.post("/auth/refresh-token");
      set({ isRefreshing: false });
      console.log("RT: ", response.data);

      setAuthTimer(response.data.expiresIn);
      return response.data;
    } catch (error) {
      set({ user: null, isRefreshing: false });
      throw error;
    }
  },
}));

const setAuthTimer = (expiresIn) => {
  // Refresh the token slightly before it expires, e.g., 1 minute before
  const refreshTime = expiresIn - 60 * 1000;

  setTimeout(() => {
    useUserStore.getState().refreshToken();
  }, refreshTime);
};

// Adding the response interceptor

let refreshPromise = null;

axios.interceptors.response.use(
  (response) => {
    // If the response is successful (status code 2xx), just return the response data
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    // If the error is a 401 (Unauthorized), and it has not been retried yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // If a refresh is already in progress, wait for it to complete
        if (refreshPromise) {
          await refreshPromise;
          return axios(originalRequest);
        }

        // Start a new refresh process
        refreshPromise = useUserStore.getState().refreshToken();
        await refreshPromise;
        refreshPromise = null; // Reset the promise once the refresh is done

        // Retry the original request with the new token
        return axios(originalRequest);
      } catch (error) {
        // If the refresh fails, log the user out and stop retries
        useUserStore.getState().logout();
        refreshPromise = null; // Clear the promise to prevent further attempts
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
