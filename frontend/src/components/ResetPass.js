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
import React from "react";

const ResetPass = () => {
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
          height: "570px",
          position: "absolute",
          top: "10%",
          left: "5%",
        }}
      >
        <Box sx={{ textAlign: "center", background: "green", color: "white" }}>
          <Typography sx={{ fontSize: "1.3rem", fontWeight: "bolder" }}>
            Change your password
          </Typography>
          <Typography sx={{ fontSize: "1.35rem", fontWeight: "bolder" }}>
            Please fill the form below accurately and keep your new password
            safely.
          </Typography>
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>New password</Typography>
          <TextField placeholder="new password" sx={{ width: "340px" }} />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Confirm New Password
          </Typography>
          <TextField placeholder="new password" sx={{ width: "340px" }} />
        </Box>
        <Box sx={{ minWidth: 120, margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Security Question
          </Typography>
          <FormControl sx={{ width: "750px" }}>
            <InputLabel id="demo-simple-select-label">
              Click to select
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
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Answer to Security Question (Only one word is recommended as answer)
          </Typography>
          <TextField placeholder="Answer" sx={{ width: "880px" }} />
        </Box>
      </Card>
    </Box>
  );
};

export default ResetPass;
