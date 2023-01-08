import { Box, Stack } from "@mui/material";
import React from "react";
import Myextens from "../components/Myextens";
import Sidebar from "../components/Sidebar";

const Myextension = () => {
  return (
    <Box>
      <Stack direction="row">
        <Sidebar />
        <Myextens />
      </Stack>
    </Box>
  );
};

export default Myextension;
