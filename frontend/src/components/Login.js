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
        <Card sx={{ width: "67vw", height: "90vh " }}>
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
              <Typography sx={{ fontSize: "1.2rem" }}>
                Forgot password? click here
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
