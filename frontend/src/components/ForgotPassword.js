import React from "react";
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
            />
            <Box sx={{ minWidth: 120, marginBottom: "10px" }}>
              <FormControl sx={{ width: "750px" }}>
                <InputLabel id="demo-simple-select-label">
                  Click to select your security question
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem>Favouite color</MenuItem>
                  <MenuItem>Favourite Food</MenuItem>
                  <MenuItem>Favourite pet name</MenuItem>
                  <MenuItem>Fathers middle name</MenuItem>
                  <MenuItem>Mothers middle name</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              placeholder="Answer to the security question"
              sx={{ width: "750px" }}
            />
            <Button
              variant="contained"
              size="medium"
              sx={{ marginTop: "6px", background: "green", height: "45px" }}
            >
              Confirm account
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
