import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userRequest } from "../api";

const UploadSig = () => {
  const [file, setFile] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [profilePixs, setProfilePixs] = useState(null);

  const { data, isLoading, isError } = useQuery(["stuff"], () => {
    try {
      return userRequest
        .get(`/staffrecord/${user.id}`)
        .then((res) => setProfilePixs(res.data[0]));
    } catch (error) {
      isError(error);
    }
  });
  console.log(file);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const url = `http://backendyctstaff.omotayoiyiola.com:3000/uploadsignature/${user.id}`;
    axios
      .put(url, formdata, config)
      .then((res) => toast.success(res.data))
      .then(() => window.location.reload())
      .catch((err) => {
        toast.error(err.response.data) ||
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
          <img style={{ height: "120px" }} src={profilePixs?.sign} alt="" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", margin: "40px" }}>
          <form onSubmit={onFormSubmit}>
            <Button
              sx={{
                fontSize: "0.8rem",
                width: "200px",
                height: "50px",
                marginTop: "20px",
              }}
              variant="contained"
              component="label"
            >
              SELECT SIGNATURE IMAGE
              <input
                hidden
                accept=".png, .jpg, .jpeg"
                multiple
                type="file"
                onChange={onInputChange}
              />
            </Button>
            <TextField
              sx={{ width: "500px", margin: "20px" }}
              placeholder={file?.name}
              disabled
            />
            <Button
              disabled={file === null ? true : false}
              sx={{ height: "50px", marginTop: "20px" }}
              variant="contained"
              type="submit"
            >
              upload
            </Button>
          </form>
          <img style={{ width: "150px" }} alt="" />
        </Box>
      </Card>
    </Box>
  );
};

export default UploadSig;
