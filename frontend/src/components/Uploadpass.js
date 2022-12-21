import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Uploadpass = () => {
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
          width: "950px",
          height: "height",
          position: "absolute",
          top: "10%",
          left: "5%",
        }}
      >
        <Box sx={{ textAlign: "center", background: "green", color: "white" }}>
          <Typography sx={{ fontSize: "1.35rem", fontWeight: "bolder" }}>
            Upload or replace passport photograph (200 x 200 pixels, red
            background)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", margin: "40px", alignItems: "center" }}>
          <Typography sx={{ fontWeight: "bolder", fontSize: "1.3rem" }}>
            Passport uploaded already :
          </Typography>
          <img
            src="https://staff.yabatech.edu.ng/staffimgg/1582018875mypass.jpg"
            alt=""
          />
        </Box>
        <Box sx={{ margin: "40px", display: "flex" }}>
          <Button sx={{ width: "100px" }} variant="contained" component="label">
            SELECT PASSPORT
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <TextField sx={{ width: "700px" }} />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", margin: "40px" }}>
          <Button sx={{ padding: "20px" }} variant="contained">
            SUBMIT
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Uploadpass;
