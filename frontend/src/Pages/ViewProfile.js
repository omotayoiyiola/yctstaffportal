import { Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import Viewprofile from "../components/Viewprofile";
const ViewProfile = () => {
  return (
    <Box>
      <Stack direction="row">
        <Sidebar />
        <Viewprofile />
      </Stack>
    </Box>
  );
};

export default ViewProfile;
