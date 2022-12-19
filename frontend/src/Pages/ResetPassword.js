import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import ResetPass from "../components/ResetPass";
import Sidebar from "../components/Sidebar";

const ResetPassword = () => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <ResetPass />
      </Stack>
    </Box>
  );
};

export default ResetPassword;
