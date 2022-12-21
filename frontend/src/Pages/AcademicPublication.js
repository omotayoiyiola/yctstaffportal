import { Box, Stack } from "@mui/material";
import React from "react";
import Academicpublication from "../components/Academicpublication";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const AcademicPublication = ({ message, content, textarea, button, last }) => {
  return (
    <Box>
      <Header />
      <Stack direction="row">
        <Sidebar />
        <Academicpublication
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

export default AcademicPublication;
