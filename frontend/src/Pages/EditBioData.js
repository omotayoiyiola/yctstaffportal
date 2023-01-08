import { Box, Stack } from "@mui/material";
import React from "react";
import Editbiodata from "../components/Editbiodata";
import Sidebar from "../components/Sidebar";

const EditBioData = () => {
  return (
    <Box>
      <Stack direction="row">
        <Sidebar />
        <Editbiodata />
      </Stack>
    </Box>
  );
};

export default EditBioData;
