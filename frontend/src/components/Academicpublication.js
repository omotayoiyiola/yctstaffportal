import React from "react";
import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
const Academicpublication = () => {
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
          height: "auto",
          position: "absolute",
          top: "10%",
          left: "5%",
        }}
      >
        <Box sx={{ padding: "15px", background: "green", color: "white" }}>
          <Typography sx={{ fontSize: "1.35rem", fontWeight: "bolder" }}>
            Upload Publications
          </Typography>
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>Title</Typography>
          <TextField sx={{ width: "890px" }} />
        </Box>

        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Name of Author(s) separated by comma. (Must include your name)
          </Typography>
          <TextField disabled sx={{ width: "890px" }} />
        </Box>

        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Year of Publication
          </Typography>
          <TextField sx={{ width: "890px" }} />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>Publisher</Typography>
          <TextField sx={{ width: "890px" }} />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>Abstract</Typography>
          <TextField sx={{ width: "890px" }} />
        </Box>
        <Box sx={{ margin: "40px", display: "flex" }}>
          <Button sx={{ width: "100%" }} variant="contained" component="label">
            BROWSE PUBLICATION (PDF FORMAT ONLY)
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <TextField sx={{ width: "520px" }} />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          sx={{ margin: "10px", marginLeft: "45px", padding: "15px" }}
        >
          SUBMIT DETAILS
        </Button>
      </Card>
    </Box>
  );
};

export default Academicpublication;
