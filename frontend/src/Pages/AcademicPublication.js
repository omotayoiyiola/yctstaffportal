import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AcademicPublication from "../components/AcademicPublication";
const AcademicPublicationn = ({ message, content, textarea, button, last }) => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <AcademicPublication
          message={message}
          content={content}
          textarea={textarea}
          button={button}
          last={last}
        />
      </Stack>
    </Box>
  );
};

export default AcademicPublicationn;
