import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Myextens from "../components/Myextens";
import Sidebar from "../components/Sidebar";

const Myextension = () => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <Myextens />
      </Stack>
    </Box>
  );
};

export default Myextension;
