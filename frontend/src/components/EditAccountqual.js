import { Box, Typography, Card, TextField } from "@mui/material";
import React from "react";

const EditAccountqual = () => {
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
          width: "1050px",
          height: "auto",
          position: "absolute",
          top: "10%",
          left: "0.8%",
        }}
      >
        <Box sx={{ padding: "15px", background: "green", color: "white" }}>
          <Typography sx={{ fontSize: "1.35rem", fontWeight: "bolder" }}>
            Academic qualification cannot be edited. Kindly visit the registry
            if information here is not up-to-date{" "}
          </Typography>
        </Box>
        <Box sx={{ margin: "-12px", padding: "47px" }}>
          <TextField
            disabled
            inputProps={{
              style: {
                height: "70px",
              },
            }}
            placeholder="Bachelor of Science (Electrical/Electronics Engineering), Master of Science (Electrical Electronics Engineering - Communication Systems Engineering)"
            sx={{ width: "1005px" }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default EditAccountqual;
