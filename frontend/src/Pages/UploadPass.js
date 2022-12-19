import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Uploadpass from "../components/Uploadpass";

const UploadPass = () => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <Uploadpass />
      </Stack>
    </Box>
  );
};

export default UploadPass;
