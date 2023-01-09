import React, { useEffect, useState } from "react";
import { Card, Box, Typography, TextField, Button, Link } from "@mui/material";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MDBSpinner } from "mdb-react-ui-kit";
import { loginUser } from "../redux/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({
    staffno: "",
    password: "",
  });
  const { user, error, loading, loginStatus } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userProfile));
  };

  return (
    <Box sx={{ background: "green", height: "100vh" }}>
      <Card
        sx={{
          width: { lg: "50vw", xs: "90vw", md: "60vw" },
          height: "auto",
          padding: "20px",
          position: "absolute",
          top: "13vh",
          left: { lg: "26vw", xs: "4vw", md: "20vw" },
        }}
      >
        <Box
          sx={{
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <img
            style={{ height: "100px", width: "300px" }}
            src="https://staff.yabatech.edu.ng/yctlogo.png"
            alt=""
          />
        </Box>
        <Box sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography
            sx={{
              color: "green",
              fontWeight: "bolder",
              fontSize: "1.5rem",
              marginTop: "20px",
            }}
          >
            LOGIN
          </Typography>
          <Typography sx={{ fontSize: "1.3rem", marginTop: "20px" }}>
            Please login with your staff number and password
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
            margin: "10px",
          }}
        >
          <TextField
            placeholder="STAFF NUMBER e.g AD/R/S.1234"
            sx={{ width: "100%", marginBottom: "12px" }}
            onChange={(e) =>
              setUserProfile({ ...userProfile, staffno: e.target.value })
            }
          />
          <TextField
            placeholder="PASSWORD"
            sx={{ width: "100%" }}
            type="password"
            onChange={(e) =>
              setUserProfile({ ...userProfile, password: e.target.value })
            }
          />
          <Link href="/dashboard" style={{ textDecoration: "none" }}>
            <Button
              onClick={handleLogin}
              variant="contained"
              size="medium"
              disabled={
                userProfile.staffno === "" || userProfile.password === ""
                  ? true
                  : false
              }
              sx={{ marginTop: "6px", background: "green", height: "45px" }}
            >
              {loading && <MDBSpinner />} Login
            </Button>
            {error && (
              <Typography
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  padding: "10px",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            )}
            {loginStatus === "successful" ? (
              <Typography
                sx={{
                  color: "white",
                  backgroundColor: "blue",
                  padding: "10px",
                }}
              >
                Login successful
              </Typography>
            ) : null}
          </Link>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
            width: "100%",
          }}
        >
          <Link href="/forgotPassword" style={{ textDecoration: "none" }}>
            <Typography sx={{ fontSize: { lg: "1.2rem" } }}>
              Forgot password? click here
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              margin: "10px",
            }}
          >
            <Typography sx={{ fontSize: { lg: "1.2rem" } }}>
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
  );
};

export default Login;
