import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
