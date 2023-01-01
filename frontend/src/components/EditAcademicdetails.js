import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Typography,
  Card,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  editresearcharea,
  editSeminars,
  researchgate,
} from "../redux/userSlice";

const EditAcademicdetails = ({
  message,
  content,
  textarea,
  button,
  last,
  link,
}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const { user, updateStatus } = useSelector((state) => state.user);

  const values = {
    data: data || content,
    id: user.id,
    link: link,
  };
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (link === "editresearcharea") {
      dispatch(editresearcharea(values));
      window.location.reload();
    }
    if (link === "researchgate") {
      dispatch(researchgate(values));
    }
    if (link === "editseminars") {
      dispatch(editSeminars(values));
    }
  };
  const [file, setFile] = useState(null);
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
    const url = `http://localhost:5000/api/uploadpublications/${user.id}`;
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
                onChange={(e) => setData(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{ background: "green", margin: "20px", padding: "10px" }}
                onClick={handleSubmit}
                type="submit"
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
            <form onSubmit={onFormSubmit}>
              <Box sx={{ margin: "40px", display: "flex" }}>
                <Button
                  sx={{ width: "100%" }}
                  variant="contained"
                  component="label"
                >
                  BROWSE FILES (PDF FORMAT ONLY)
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    name="image"
                    onChange={onInputChange}
                  />
                </Button>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <TextField
                    placeholder={file?.name}
                    sx={{ width: "650px" }}
                    onChange={(e) => setData(e.target.value)}
                  />
                </IconButton>
              </Box>

              <Button
                variant="contained"
                sx={{ margin: "8px", marginLeft: "40px", padding: "17px" }}
                type="submit"
              >
                SUBMIT {last}
              </Button>
            </form>
          </>
        )}
        {updateStatus === "Updated successfully" && (
          <Typography sx={{ background: "green" }}>{updateStatus}</Typography>
        )}

        {updateStatus === "update Unsuccessful" && (
          <Typography sx={{ background: "red" }}>{updateStatus}</Typography>
        )}
      </Card>
    </Box>
  );
};

export default EditAcademicdetails;
