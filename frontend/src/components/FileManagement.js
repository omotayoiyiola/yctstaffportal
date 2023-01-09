import { Box, Typography, Card, TextField, Button } from "@mui/material";
import axios from "axios";
import { MDBSpinner } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import DocTableList from "./DocTableList";

const FileMangement = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const { user } = useSelector((state) => state.user);
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
        .then(() => setLoading(false))
        .catch((error) => {
          toast.error("not uploaded successfully");
          setLoading(false);
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
          width: { lg: "800px", md: "620px", xs: "500px" },
          height: "auto",
          position: "absolute",
          top: { xs: "10vh", md: "5%" },
          left: { xs: "10%" },
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
              fullWidth
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
                  accept=".doc,.pdf,.png,.jpeg,.jpg"
                />
              </Button>
              <TextField disabled fullWidth placeholder={file?.name} />
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
            {loading && <MDBSpinner />} SUBMIT
          </Button>
        </form>
      </Card>
      <Card
        sx={{
          width: { lg: "1000px", xs: "950px" },
          height: "auto",
          position: "absolute",
          top: { md: "70vh", xs: "70vh", sm: "70vh", lg: "70vh" },
          left: { xs: "10%", md: "1%" },
        }}
      >
        <DocTableList />
      </Card>
    </Box>
  );
};

export default FileMangement;
