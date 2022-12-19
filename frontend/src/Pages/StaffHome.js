import { Box, Card, Typography } from "@mui/material";
import React from "react";
const StaffHome = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        flex: 3,
        height: "auto",
        position: "relative",
      }}
    >
      <Card
        sx={{
          height: "350px",
          width: "950px",
          alignItems: "center",
          position: "absolute",
          top: "10%",
          left: "5%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          WELCOME BACK OMOTAYO IYIOLA
        </Typography>
      </Card>
    </Box>
  );
};

export default StaffHome;
