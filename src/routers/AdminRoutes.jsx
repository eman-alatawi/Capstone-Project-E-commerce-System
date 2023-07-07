import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "../constants/routes";
import AdminNavigation from "../components/common/nav/AdminNavigation";
import AdminSideBar from "../components/common/layout/AdminSideBar";
import AdminContentWrapper from "../components/common/layout/AdminContentWrapper";
import { Box } from "@mui/material";

const AdminRoutes = () => {
  const [isAuth, setIsAuht] = useState(true);
  const [role, setRole] = useState("ADMIN")


  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return isAuth && role === "ADMIN" ? (
      <Box sx={{ display: "flex" }}>
        <AdminNavigation handleDrawerToggle={handleDrawerToggle} />

        <AdminSideBar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <AdminContentWrapper>
          <Outlet />
        </AdminContentWrapper>
      </Box>
  ) : (
    <Navigate to={HOME} />
  );
};

export default AdminRoutes;
