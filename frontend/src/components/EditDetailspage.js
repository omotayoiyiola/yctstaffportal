import { ArrowBack } from "@mui/icons-material";
import { Box, Typography, Card, TextField, Button } from "@mui/material";
import React from "react";

const EditDetailspage = ({ message, submessage, allowed }) => {
  console.log(allowed);
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        flex: 3,
        height: "auto",
        position: "relative",
      }}
    >
      <Button
        startIcon={<ArrowBack />}
        sx={{ marginTop: "60px", color: "white" }}
        href="/dashboard"
      >
        Back home
      </Button>
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
            {message}
          </Typography>
        </Box>
        <Box sx={{ margin: "-12px", padding: "47px" }}>
          <TextField
            disabled={allowed === "true" ? true : false}
            inputProps={{
              style: {
                height: "70px",
              },
            }}
            placeholder={submessage}
            sx={{ width: "1005px" }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default EditDetailspage;
