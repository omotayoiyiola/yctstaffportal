import { Box, Stack } from "@mui/material";
import React from "react";
import EditAcademicdetails from "../components/EditAcademicdetails";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const AcademicEdits = ({ message, content, textarea, button, last, link }) => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <EditAcademicdetails
          message={message}
          content={content}
          textarea={textarea}
          button={button}
          last={last}
          link={link}
        />
      </Stack>
    </Box>
  );
};

export default AcademicEdits;
