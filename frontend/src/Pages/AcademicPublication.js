import { Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import AcademicPublication from "../components/AcademicPublication";
const AcademicPublicationn = ({ message, content, textarea, button, last }) => {
  return (
    <Box>
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
