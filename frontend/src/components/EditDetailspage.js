import { ArrowBack } from "@mui/icons-material";
import { Box, Typography, Card, TextField, Button } from "@mui/material";
import { MDBSpinner } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editchildren,
  editnextofkin,
  editprofessional,
  editspouse,
} from "../redux/userSlice";

const EditDetailspage = ({ message, submessage, allowed, link }) => {
  const dispatch = useDispatch();
  const { user, updateStatus, loading } = useSelector((state) => state.user);
  const [data, setData] = useState("");
  const values = {
    data: data || submessage,
    id: user.id,
    link: link,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link === "editnextofkin") {
      dispatch(editnextofkin(values));
    }
    if (link === "editprofessional") {
      dispatch(editprofessional(values));
    }
    if (link === "editchildren") {
      dispatch(editchildren(values));
    }
    if (link === "editspouse") {
      dispatch(editspouse(values));
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
      <Button
        startIcon={<ArrowBack />}
        sx={{ marginTop: "60px", color: "white" }}
        href="/dashboard"
      >
        Back home
      </Button>
      <Card
        sx={{
          width: { lg: "850px", md: "550px", sm: "550px", xs: "450px" },
          height: "auto",
          position: "absolute",
          top: { lg: "10%", sm: "20vh", xs: "15vh" },
          left: { lg: "0.8%", md: "10%", sm: "11%", xs: "6%" },
        }}
      >
        <Box sx={{ padding: "15px", background: "green", color: "white" }}>
          <Typography sx={{ fontSize: "1.35rem", fontWeight: "bolder" }}>
            {message}
          </Typography>
        </Box>
        <Box sx={{ margin: "-12px", padding: "47px" }}>
          <TextField
            disabled={allowed === "true" ? true : false}
            onChange={(e) => setData(e.target.value)}
            multiline
            rows={2}
            defaultValue={submessage}
            inputProps={{
              style: {
                height: "70px",
              },
            }}
            fullWidth
          />
        </Box>
        {updateStatus === "Update successfull" && (
          <Typography
            sx={{
              background: "green",
              width: "170px",
              padding: "10px",
              margin: "20px",
              color: "white",
            }}
          >
            {updateStatus}
          </Typography>
        )}
        {updateStatus === "Update Unsuccessful" && (
          <Typography
            sx={{
              background: "red",
              width: "170px",
              padding: "10px",
              margin: "20px",
              color: "white",
            }}
          >
            {updateStatus}
          </Typography>
        )}
        {updateStatus === "Update successful" && (
          <Typography
            sx={{
              background: "blue",
              width: "170px",
              padding: "10px",
              margin: "20px",
              color: "white",
            }}
          >
            {updateStatus}
          </Typography>
        )}
        {updateStatus === "Please provide more details." && (
          <Typography
            sx={{
              background: "red",
              width: "170px",
              padding: "10px",
              margin: "20px",
              color: "white",
            }}
          >
            {updateStatus}
          </Typography>
        )}
        <Button
          disabled={allowed === "true" ? true : false}
          onClick={handleSubmit}
          variant="contained"
          sx={{ margin: "20px" }}
        >
          {loading && <MDBSpinner />}Edit
        </Button>
      </Card>
    </Box>
  );
};

export default EditDetailspage;
