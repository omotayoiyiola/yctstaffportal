import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        flex: 3,
        height: "400vh",
        position: "relative",
      }}
    >
      <Card
        sx={{
          width: { lg: "800px", md: "600px", sm: "550px", xs: "500px" },
          height: "40vh",
          position: "absolute",
          top: { xs: "20vh", md: "25vh", lg: "5%" },
          left: { sm: "7%", md: "25%", xs: "2%", lg: "25%" },
          padding: "10px",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <Typography sx={{ fontWeight: "bolder" }} variant="h2">
            PLEASE LOGIN PROPERLY
          </Typography>
          <Button
            href="/login"
            sx={{
              fontWeight: "bolder",
              padding: "10px",
              marginTop: "20px",
              color: "white",
              background: "green",
              ":hover": { bgcolor: "green", color: "white" },
            }}
            variant="contained"
          >
            Please enter the login page
          </Button>
          <button onClick={() => window.location.reload(false)}>Click to reload!</button>
        </Box>
      </Card>
    </Box>
  );
};

export default Error;
