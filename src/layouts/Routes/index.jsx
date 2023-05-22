import React, { useContext } from "react";
import { DashboardPage } from "../../pages/Dashboard";
import { Photos as PhotosPage } from "../../pages/Photos";
import { Descriptions as DescriptionsPage } from "../../pages/Descriptions";
import { Navigate, useRoutes } from "react-router-dom";
import { LoginPage } from "../../pages/Login";
import { UserAuthContext } from "../../store/context";
import PrincipalLayout from "..";

export const RoutesComponent = () => {
  const userContext = useContext(UserAuthContext);

  const mainRoutes = [
    {
      path: "/",
      element: <PrincipalLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: 'photos',
          index: true,
          element: <PhotosPage/>
        },
        {
          path: 'descriptions',
          index: true,
          element: <DescriptionsPage/>
        },
      ],
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
