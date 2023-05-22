import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

const PrincipalLayout = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

export default PrincipalLayout;
