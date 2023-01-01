import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const UploadSig = () => {
  const [file, setFile] = useState(null);
  const { user } = useSelector((state) => state.user);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const url = `http://localhost:5000/api/uploadsignature/${user.id}`;
    axios
      .put(url, formdata, config)
      .then((res) => toast.success(res.data.message))
      .catch((err) => {
        toast.error(err.response.data.message) ||
          toast.error("not uploaded successfully");
      });
  };
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };
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
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          ></IconButton>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", margin: "40px" }}>
          <form onSubmit={onFormSubmit}>
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
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={onInputChange}
              />
            </Button>
            <TextField
              sx={{ width: "600px", margin: "20px" }}
              placeholder={file?.name}
            />
            <Button variant="contained" type="submit">
              upload
            </Button>
          </form>
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
