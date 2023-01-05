import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import TableList from "./TableList";
const AcademicPublication = () => {
  const { user } = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState(null);
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("image", file);
    formdata.append("titl", title);
    formdata.append("abst", abstract);
    formdata.append("autho", author);
    formdata.append("yea", year);
    formdata.append("shar", publisher);
    formdata.append("priva", status);
    formdata.append("usid", user.id);
    formdata.append("staffid", user.staffno);
    console.log(formdata);
    axios({
      url: "http://backendyctstaff.omotayoiyiola.com:3000/singlepublication",
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formdata,
    })
      .then((res) => toast.success(res.data))
      .then(() => window.location.reload())
      .catch((err) => {
        toast.success("not uploaded");
      });
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
        <form onSubmit={onFormSubmit}>
          <Box sx={{ margin: "20px" }}>
            <Typography sx={{ fontWeight: "bolder" }}>Title</Typography>
            <TextField
              sx={{ width: "890px" }}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box sx={{ margin: "20px" }}>
            <Typography sx={{ fontWeight: "bolder" }}>
              Name of Author(s) separated by comma. (Must include your name)
            </Typography>
            <TextField
              sx={{ width: "890px" }}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </Box>

          <Box sx={{ margin: "20px" }}>
            <Typography sx={{ fontWeight: "bolder" }}>
              Year of Publication
            </Typography>
            <FormControl sx={{ width: "890px" }}>
              <InputLabel id="demo-simple-select-label">
                Year of Publication
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="security questions"
                onChange={(e) => setYear(e.target.value)}
              >
                <MenuItem value="2000">2000</MenuItem>
                <MenuItem value="2001">2001</MenuItem>
                <MenuItem value="2002">2002</MenuItem>
                <MenuItem value="2003">2003</MenuItem>
                <MenuItem value="2004">2004</MenuItem>
                <MenuItem value="2005">2005</MenuItem>
                <MenuItem value="2006">2006</MenuItem>
                <MenuItem value="2007">2007</MenuItem>
                <MenuItem value="20008">2008</MenuItem>
                <MenuItem value="2009">2009</MenuItem>
                <MenuItem value="2010">2010</MenuItem>
                <MenuItem value="2011">2011</MenuItem>
                <MenuItem value="2012">2012</MenuItem>
                <MenuItem value="2013">2013</MenuItem>
                <MenuItem value="2014">2014</MenuItem>
                <MenuItem value="2015">2015</MenuItem>
                <MenuItem value="2016">2016</MenuItem>
                <MenuItem value="2017">2017</MenuItem>
                <MenuItem value="2018">2018</MenuItem>
                <MenuItem value="2019">2019</MenuItem>
                <MenuItem value="2020">2020</MenuItem>
                <MenuItem value="2021">2021</MenuItem>
                <MenuItem value="2022">2022</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ margin: "20px" }}>
            <Typography sx={{ fontWeight: "bolder" }}>Publisher</Typography>
            <TextField
              sx={{ width: "890px" }}
              onChange={(e) => setPublisher(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ margin: "20px" }}>
            <Typography sx={{ fontWeight: "bolder" }}>Abstract</Typography>
            <TextField
              sx={{ width: "890px" }}
              onChange={(e) => setAbstract(e.target.value)}
              required
            />
          </Box>
          <Box sx={{ margin: "20px" }}>
            <Typography sx={{ fontWeight: "bolder" }}>Status</Typography>
            <FormControl sx={{ width: "890px" }}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="private">private</MenuItem>
                <MenuItem value="public">public</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            sx={{ width: "200px", margin: "20px" }}
            variant="contained"
            component="label"
          >
            BROWSE PUBLICATION (PDF FORMAT ONLY)
            <input
              hidden
              type="file"
              name="image"
              accept=".pdf,.docs"
              onChange={onInputChange}
            />
          </Button>
          <TextField
            sx={{ width: "600px", margin: "20px" }}
            placeholder={file?.name}
          />
          <Button
            disabled={
              title === "" ||
              abstract === "" ||
              author === "" ||
              year === "" ||
              publisher === "" ||
              status === "" ||
              file === ""
                ? true
                : false
            }
            variant="contained"
            type="submit"
            sx={{ margin: "20px" }}
          >
            upload
          </Button>
        </form>
      </Card>
      <Card
        sx={{
          width: "1050px",
          height: "auto",
          position: "absolute",
          top: "50%",
          left: "0.8%",
        }}
      >
        <TableList />
      </Card>
    </Box>
  );
};

export default AcademicPublication;
