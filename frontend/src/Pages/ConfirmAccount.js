import { Box, Stack } from "@mui/material";
import React from "react";
import ConfirmAcount from "../components/ConfirmAcount";

const ConfirmAccount = () => {
  return (
    <Box>
      <Stack direction="row">
        <ConfirmAcount />
      </Stack>
    </Box>
  );
};

export default ConfirmAccount;
