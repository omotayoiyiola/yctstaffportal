import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const UploadSig = () => {
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
          width: "950px",
          height: "350px",
          position: "absolute",
          top: "10%",
          left: "5%",
        }}
      >
        <Box sx={{ textAlign: "center", background: "green", color: "white" }}>
          <Typography sx={{ fontSize: "1.35rem", fontWeight: "bolder" }}>
            Upload or replace signature photograph (200 x 50 pixels, white
            background)
          </Typography>
        </Box>
        <Box sx={{ margin: "40px", display: "flex" }}>
          <Button
            sx={{
              fontSize: "0.8rem",
              width: "200px",
              height: "50px",
              marginTop: "9px",
            }}
            variant="contained"
            component="label"
          >
            SELECT SIGNATURE IMAGE
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <TextField sx={{ width: "500px" }} />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", margin: "40px" }}>
          <Button
            sx={{ width: "100px", marginBottom: "8px" }}
            variant="contained"
          >
            Submit
          </Button>
          <img
            style={{ width: "150px" }}
            src="https://staff.yabatech.edu.ng/staffsign/1565326848mysignature.jpg"
            alt=""
          />
        </Box>
      </Card>
    </Box>
  );
};

export default UploadSig;
