import React, { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore.js";
import Navabar from "./components/Navabar.jsx";
import Adminpage from "./pages/Adminpage.jsx";

const App = () => {
  const { user, checkAuth } = useUserStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <div className="min-h-screen bg-gray-900 relative text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
        </div>
      </div>
      <div className="relative z-50 pt-20">
        <Navabar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="admin-dashboard"
            element={
              user?.role === "admin" ? <Adminpage /> : <Navigate to="/" />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
