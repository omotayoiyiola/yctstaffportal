import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MDBSpinner } from "mdb-react-ui-kit";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userRequest } from "../api";

const Uploadpass = () => {
  const [file, setFile] = useState(null);
  const { user, loading } = useSelector((state) => state.user);
  const [profilePixs, setProfilePixs] = useState(null);
  const { isError } = useQuery(["stuff"], () => {
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
        toast.error(err.response.data);
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
          width: { lg: "800px", md: "600px", sm: "550px", xs: "500px" },
          height: "auto",
          position: "absolute",
          top: { xs: "20vh", md: "10%" },
          left: { sm: "12%", md: "5%", xs: "2%" },
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
            style={{ width: "200px", height: "200px" }}
            src={profilePixs?.imgg}
            alt=""
          />
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
            sx={{ margin: "10px" }}
          >
            {loading && <MDBSpinner />} upload
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default Uploadpass;
