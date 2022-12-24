import { Box, Stack } from "@mui/material";
import React from "react";
import FileMangement from "../components/FileManagement";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const FileManagement = () => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <FileMangement />
      </Stack>
    </Box>
  );
};

export default FileManagement;
