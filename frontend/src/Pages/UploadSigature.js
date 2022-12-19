import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UploadSig from "../components/UploadSig";

const UploadSigature = () => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <UploadSig />
      </Stack>
    </Box>
  );
};

export default UploadSigature;
