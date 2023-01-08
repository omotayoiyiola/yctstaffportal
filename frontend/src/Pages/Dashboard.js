import { Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import StaffHome from "./StaffHome";

const Dashboard = () => {
  return (
    <Box>
      <Stack direction="row">
        <Sidebar />
        <StaffHome />
      </Stack>
    </Box>
  );
};

export default Dashboard;
