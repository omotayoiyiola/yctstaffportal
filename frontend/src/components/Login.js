import React from "react";
import { Card, Box, Typography, TextField, Button, Link } from "@mui/material";
import "./login.css";
const Login = () => {
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
            />
            <TextField placeholder="PASSWORD" sx={{ width: "100%" }} />
            <Link href="/dashboard" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="medium"
                sx={{ marginTop: "6px", background: "green", height: "45px" }}
              >
                Login
              </Button>
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
