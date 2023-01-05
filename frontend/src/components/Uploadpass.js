import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userRequest } from "../api";

const Uploadpass = () => {
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
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const url = `http://backendyctstaff.omotayoiyiola.com:3000/uploadpassport/${user.id}`;
    axios
      .put(url, formdata, config)
      .then((res) => toast.success(res.data) && window.location.reload())
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data);
      });
  };
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(profilePixs);
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
          <img style={{ height: "120px" }} src={profilePixs?.imgg} alt="" />
        </Box>
        <form onSubmit={onFormSubmit}>
          <Button
            sx={{ width: "190px", margin: "20px", padding: "15px" }}
            variant="contained"
            component="label"
          >
            SELECT PASSPORT
            <input
              hidden
              type="file"
              name="image"
              accept=".png, .jpg, .jpeg"
              onChange={onInputChange}
            />
          </Button>
          <TextField
            sx={{ width: "500px", margin: "20px" }}
            placeholder={file?.name}
            disabled
          />
          <Button
            variant="contained"
            type="submit"
            disabled={file === null ? true : false}
          >
            upload
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default Uploadpass;
