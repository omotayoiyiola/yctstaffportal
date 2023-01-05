import { Delete, Download } from "@mui/icons-material";
import { Box, Typography, Card, TextField, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import DocTableList from "./DocTableList";

const FileMangement = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const { user } = useSelector((state) => state.user);
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("image", file);
    formdata.append("titl", title);
    formdata.append("staffid", user?.staffno);
    formdata.append("usid", user?.id);
    if (file === undefined) {
      toast.info("please upload an image");
    } else {
      axios({
        url: "http://backendyctstaff.omotayoiyiola.com:3000/docmgt",
        method: "POST",
        headers: {
          "content-type": "multipart/form-data",
        },
        data: formdata,
      })
        .then((res) => toast.success(res.data))
        .then(() => window.location.reload())
        .catch((error) => {
          toast.error("not uploaded successfully");
        });
    }
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
            Upload Documents
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{ margin: "-12px", padding: "47px" }}>
            <Typography>Title</Typography>
            <TextField
              inputProps={{
                style: {
                  height: "70px",
                },
              }}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ width: "1005px" }}
            />
            <Box sx={{ display: "flex", marginTop: "10px" }}>
              <Button
                sx={{
                  background: "green",
                  color: "white",
                  variant: "contained",
                  marginRight: "8px",
                }}
                component="label"
                variant="contained"
              >
                BROWSE DOCS(PDF FORMAT ONLY)
                <input
                  hidden
                  type="file"
                  name="image"
                  onChange={onInputChange}
                  accept=".doc,.pdf"
                />
              </Button>
              <TextField
                disabled
                sx={{ width: "550px" }}
                placeholder={file?.name}
              />
            </Box>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "green",
              margin: "10px",
              height: "30px",
              color: "white",
            }}
            disabled={title === "" || file === "" ? true : false}
          >
            SUBMIT
          </Button>
        </form>
      </Card>
      <Card
        sx={{
          width: "1050px",
          height: "auto",
          position: "absolute",
          top: "30%",
          left: "0.8%",
        }}
      >
        <DocTableList />
      </Card>
    </Box>
  );
};

export default FileMangement;
