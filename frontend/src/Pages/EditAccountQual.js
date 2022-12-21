import { Box, Stack } from "@mui/material";
import React from "react";
import EditAccountqual from "../components/EditAccountqual";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const EditAccountQual = () => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <EditAccountqual />
      </Stack>
    </Box>
  );
};

export default EditAccountQual;
