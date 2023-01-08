import { Box, Stack } from "@mui/material";
import React from "react";
import FileMangement from "../components/FileManagement";
import Sidebar from "../components/Sidebar";

const FileManagement = () => {
  return (
    <Box>
      <Stack direction="row">
        <Sidebar />
        <FileMangement />
      </Stack>
    </Box>
  );
};

export default FileManagement;
