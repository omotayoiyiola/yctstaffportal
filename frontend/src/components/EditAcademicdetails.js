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
import { MDBSpinner } from "mdb-react-ui-kit";
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
  const [loader, setLoader] = useState(false);
  const { user, updateStatus, loading } = useSelector((state) => state.user);
  const values = {
    data: data || content,
    id: user.id,
    link: link,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (link === "editresearcharea") {
      dispatch(editresearcharea(values));
    }
    if (link === "researchgate") {
      dispatch(researchgate(values));
    }
    if (link === "editseminars") {
      dispatch(editSeminars(values));
    }
  };
  const [file, setFile] = useState(null);
  const onFormSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const formdata = new FormData();
    formdata.append("image", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const url = `http://backendyctstaff.omotayoiyiola.com:3000/upload${last}/${user.id}`;
    axios
      .put(url, formdata, config)
      .then((res) => toast.success(res.data))
      .then(() => setLoader(false))

      .catch((err) => {
        toast.error(err.response.data);
        setLoader(false);
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
              {updateStatus === "Update successfull" && (
                <Typography
                  sx={{
                    background: "green",
                    width: "170px",
                    padding: "10px",
                    margin: "20px",
                    color: "white",
                  }}
                >
                  {updateStatus}
                </Typography>
              )}
              {updateStatus === "Update Unsuccessful" && (
                <Typography
                  sx={{
                    background: "red",
                    width: "170px",
                    padding: "10px",
                    margin: "20px",
                    color: "white",
                  }}
                >
                  {updateStatus}
                </Typography>
              )}
              {updateStatus === "Update successful" && (
                <Typography
                  sx={{
                    background: "blue",
                    width: "170px",
                    padding: "10px",
                    margin: "20px",
                    color: "white",
                  }}
                >
                  {updateStatus}
                </Typography>
              )}
              {updateStatus === "Please provide more details." && (
                <Typography
                  sx={{
                    background: "red",
                    width: "170px",
                    padding: "10px",
                    margin: "20px",
                    color: "white",
                  }}
                >
                  {updateStatus}
                </Typography>
              )}
              {updateStatus === "Please provide full link." && (
                <Typography
                  sx={{
                    background: "red",
                    width: "190px",
                    padding: "10px",
                    margin: "20px",
                    color: "white",
                  }}
                >
                  {updateStatus}
                </Typography>
              )}

              <Button
                variant="contained"
                sx={{ background: "green", margin: "20px", padding: "10px" }}
                onClick={handleSubmit}
                type="submit"
              >
                {loading && <MDBSpinner />} EDIT NOW
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
                    accept=".doc,.pdf"
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
                  <input hidden accept=".doc,.pdf" type="file" />
                  <TextField
                    placeholder={file?.name}
                    disabled
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
                {loader && <MDBSpinner />} SUBMIT {last}
              </Button>
            </form>
          </>
        )}
      </Card>
    </Box>
  );
};

export default EditAcademicdetails;
