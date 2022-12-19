import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StaffHome from "./StaffHome";

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <StaffHome />
      </Stack>
    </Box>
  );
};

export default Dashboard;
