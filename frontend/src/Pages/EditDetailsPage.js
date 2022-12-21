import { Box, Stack } from "@mui/material";
import React from "react";
import EditDetailspage from "../components/EditDetailspage";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const EditDetailsPage = ({ message, submessage, allowed }) => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <EditDetailspage
          message={message}
          submessage={submessage}
          allowed={allowed}
        />
      </Stack>
    </Box>
  );
};

export default EditDetailsPage;
