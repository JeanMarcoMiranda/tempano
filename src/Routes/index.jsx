import React, { useContext } from "react";
import { DashboardPage } from "../pages/Dashboard";
import { Navigate, useRoutes } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { UserAuthContext } from "../store/context";

export const RoutesComponent = () => {
  const userContext = useContext(UserAuthContext);

  const mainRoutes = [
    {
      path: "/",
      element: <DashboardPage />,
    },
  ];

  const authRoutes = [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/*",
      element: <Navigate to="/login" />,
    },
  ];

  if (userContext?.isAuth) return useRoutes(mainRoutes);

  return useRoutes(authRoutes);
};
