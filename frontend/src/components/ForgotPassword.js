import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "./login.css";
import { ArrowBack } from "@mui/icons-material";
import { forgotPassword } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MDBSpinner } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const [staff, setStaff] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [answerSecurityQuestion, setAnswerSecurityQuestion] = useState("");
  const { error, loading, user } = useSelector((state) => state.user);
  const nav = useNavigate();
  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(values));
  };
  const values = {
    staffno: staff,
    secq: securityQuestion,
    seca: answerSecurityQuestion,
  };
  useEffect(() => {
    user && nav("/confirmaccount");
  }, [user, nav]);
  return (
    <div className="login_container">
      <Box
        sx={{
          margin: " 0 auto",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "20%",
          top: "5%",
        }}
      >
        <Button
          startIcon={<ArrowBack />}
          sx={{ marginTop: "60px", color: "white" }}
          href="/dashboard"
        >
          Back home
        </Button>
        <Card sx={{ width: "67vw", height: "auto " }}>
          <Box
            sx={{
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <img src="https://staff.yabatech.edu.ng/yctlogo.png" alt="" />
          </Box>
          <Box sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography
              sx={{
                color: "green",
                fontWeight: "bolder",
                fontSize: "1.5rem",
                marginTop: "50px",
              }}
            >
              RECOVER YOUR PASSWORD
            </Typography>
            <Typography sx={{ fontSize: "1.3rem", marginTop: "20px" }}>
              Please fill the form below appropriately to renew your password
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <TextField
              placeholder="STAFF NUMBER e.g AD/R/S.1234"
              sx={{ width: "750px", marginBottom: "12px" }}
              onChange={(e) => setStaff(e.target.value)}
            />
            <Box sx={{ minWidth: 120, marginBottom: "10px" }}>
              <FormControl sx={{ width: "750px" }}>
                <InputLabel id="demo-simple-select-label">
                  Click to select your security question
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="security question"
                  onChange={(e) => setSecurityQuestion(e.target.value)}
                >
                  <MenuItem value="Favourite Color">Favouite Color</MenuItem>
                  <MenuItem value="Favourite Food">Favourite Food</MenuItem>
                  <MenuItem value="Favourite Pet Name ">
                    Favourite Pet Name
                  </MenuItem>
                  <MenuItem value="Fathers Middle Name ">
                    Fathers Middle Name
                  </MenuItem>
                  <MenuItem value="Mothers Middle Name ">
                    Mothers Middle Name
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              placeholder="Answer to the security question"
              sx={{ width: "750px" }}
              onChange={(e) => setAnswerSecurityQuestion(e.target.value)}
            />
            <Button
              variant="contained"
              disabled={
                staff === "" ||
                securityQuestion === "" ||
                answerSecurityQuestion === ""
                  ? true
                  : false
              }
              size="medium"
              sx={{ marginTop: "6px", background: "green", height: "45px" }}
              onClick={handleForgotPassword}
            >
              {loading && <MDBSpinner />} Confirm account
            </Button>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ fontSize: "1.2rem" }}>
                Back home? click here
              </Typography>
            </Link>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: "1.2rem" }}>
                {" "}
                Complaints/Enquiries? |
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontSize: "1.1rem",
                  marginTop: "2px",
                }}
              >
                Send a mail to webometrics@yabatech.edu.ng
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default Login;
