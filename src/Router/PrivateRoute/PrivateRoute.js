import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const state = useSelector((state) => state);
  const { auth } = state;
  const token = auth.token;

  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
