import React from "react";
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
const Editbiodata = () => {
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
          width: "950px",
          height: "auto",
          position: "absolute",
          top: "10%",
          left: "5%",
        }}
      >
        <Box sx={{ padding: "15px", background: "green", color: "white" }}>
          <Typography sx={{ fontSize: "1.35rem", fontWeight: "bolder" }}>
            Edit Personal Details
          </Typography>
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Title (e.g. Mr./Mrs/Dr./Engr/Ms)
          </Typography>
          <TextField placeholder="Mr." sx={{ width: "890px" }} />
        </Box>
        <Box sx={{ minWidth: 120, margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>**Gender (MALE)</Typography>
          <FormControl sx={{ width: "890px" }}>
            <InputLabel id="demo-simple-select-label">SELECT GENDER</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="gender"
            >
              <MenuItem>MALE</MenuItem>
              <MenuItem>FEMALE</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>Department</Typography>
          <TextField
            disabled
            placeholder="CENTRE FOR INFORMATION TECHNOLOGY AND MANAGEMENT"
            sx={{ width: "890px" }}
          />
        </Box>
        <Box sx={{ minWidth: 120, margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            **Staff category (NON-TEACHING (SENIOR))
          </Typography>
          <FormControl sx={{ width: "890px" }}>
            <InputLabel id="demo-simple-select-label">
              Select staff category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="staff_category"
            >
              <MenuItem>ACADEMIC STAFF</MenuItem>
              <MenuItem>NON-TEACHING (SENOIR)</MenuItem>
              <MenuItem>NON-TEACHING (JUNIOR)</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            **Personal phone number
          </Typography>
          <TextField placeholder="07031936856" sx={{ width: "890px" }} />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Official email address
          </Typography>
          <TextField
            placeholder="omotayo.iyiola@yabatech.edu.ng"
            sx={{ width: "890px" }}
          />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Personal email address
          </Typography>
          <TextField
            placeholder="omclintonty@yahoo.ca"
            sx={{ width: "890px" }}
          />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            **Home address (will not be published)
          </Typography>
          <TextField
            placeholder="No 1, Taiwo street, off Ikosi street, Ketu Lagos"
            sx={{ width: "890px" }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ margin: "20px", padding: "15px", background: "green" }}
        >
          UPDATE NOW
        </Button>
      </Card>
    </Box>
  );
};

export default Editbiodata;
