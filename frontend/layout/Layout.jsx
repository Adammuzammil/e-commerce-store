import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserStore } from "../src/stores/useUserStore";

const Layout = () => {
  const navigate = useNavigate();
  const { user, checkAuth } = useUserStore(); // Access user and checkAuth from your Zustand store

  useEffect(() => {
    checkAuth(); // Check authentication status on component mount
  }, [checkAuth]);

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to home if user is logged in
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  return (
    <div>
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default Layout;
