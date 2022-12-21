import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Typography,
  Card,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";

const EditAcademicdetails = ({ message, content, textarea, button, last }) => {
  console.log(textarea);
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
          {textarea === "true" ? (
            <>
              <TextField
                inputProps={{
                  style: {
                    height: "70px",
                  },
                }}
                placeholder={content}
                sx={{ width: "1005px" }}
              />
              <Button
                variant="contained"
                sx={{ background: "green", margin: "20px", padding: "10px" }}
              >
                EDIT NOW
              </Button>
            </>
          ) : (
            <Typography variant="h5">{content}</Typography>
          )}
        </Box>
        {button === "true" && (
          <>
            <Box sx={{ margin: "40px", display: "flex" }}>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                component="label"
              >
                BROWSE FILES (PDF FORMAT ONLY)
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <TextField sx={{ width: "650px" }} />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              sx={{ margin: "8px", marginLeft: "40px", padding: "17px" }}
            >
              SUBMIT {last}
            </Button>
          </>
        )}
      </Card>
    </Box>
  );
};

export default EditAcademicdetails;
