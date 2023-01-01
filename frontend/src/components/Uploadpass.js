import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Uploadpass = () => {
  const [file, setFile] = useState(null);
  const { user } = useSelector((state) => state.user);
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
    console.log(formdata);
    const url = `http://localhost:5000/api/uploadpassport/${user.id}`;
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
          <img src={user?.imgg} alt="" />
        </Box>
        <form onSubmit={onFormSubmit}>
          <Button
            sx={{ width: "100px", margin: "20px" }}
            variant="contained"
            component="label"
          >
            SELECT PASSPORT
            <input type="file" name="image" onChange={onInputChange} />
          </Button>
          <TextField
            sx={{ width: "600px", margin: "20px" }}
            placeholder={file?.name}
          />
          <Button variant="contained" type="submit">
            upload
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default Uploadpass;
