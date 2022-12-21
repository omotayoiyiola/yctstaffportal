import { Box, Stack } from "@mui/material";
import React from "react";
import Editbiodata from "../components/Editbiodata";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const EditBioData = () => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <Editbiodata />
      </Stack>
    </Box>
  );
};

export default EditBioData;
