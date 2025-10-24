import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Uso: <PrivateRoute element={<Perfil />} />
// Uso con rol: <PrivateRoute requiredRole="ADMIN" element={<Admin />} />
const PrivateRoute = ({ element, requiredRole }) => {
  const { isAuthenticated, role } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;
