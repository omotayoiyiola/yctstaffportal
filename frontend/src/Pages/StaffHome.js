import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
const StaffHome = () => {
  const { user } = useSelector((state) => state.user);
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
          height: "150px",
          width: { lg: "820px", md: "550px", sm: "550px", xs: "200px" },
          alignItems: "center",
          position: "absolute",
          top: { md: "10%", sm: "30vh", xs: "30vh" },
          left: { md: "3vw", sm: "5vw", xs: "20vw" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "60px",
            fontSize: { xs: "1.3rem", md: "2.8rem" },
          }}
        >
          {user?.fulln}
        </Typography>
      </Card>
    </Box>
  );
};

export default StaffHome;
