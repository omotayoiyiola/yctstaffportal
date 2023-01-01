import { ArrowBack } from "@mui/icons-material";
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
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Test = () => {
  const [file, setFile] = useState(null);
  const { user } = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [status, setStatus] = useState("");
  console.log(year, title, abstract, author, publisher, status, file);
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(year, title, abstract, author, publisher, status, file);
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
      url: "http://localhost:5000/api/singlepublication",
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formdata,
    })
      .then((res) => console.log(res))
      .catch((err) => {
        // toast.error(err.response.data.message) ||
        toast.error("not uploaded successfully");
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
            />
          </Box>
          <Box sx={{ margin: "20px" }}>
            <Typography sx={{ fontWeight: "bolder" }}>Abstract</Typography>
            <TextField
              sx={{ width: "890px" }}
              onChange={(e) => setAbstract(e.target.value)}
            />
          </Box>
          <Box sx={{ margin: "20px" }}>
            <Typography sx={{ fontWeight: "bolder" }}>Status</Typography>
            <FormControl sx={{ width: "890px" }}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
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

export default Test;
