import { Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import Uploadpass from "../components/Uploadpass";

const UploadPass = () => {
  return (
    <Box>
      <Stack direction="row">
        <Sidebar />
        <Uploadpass />
      </Stack>
    </Box>
  );
};

export default UploadPass;
