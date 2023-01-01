import { ArrowBack } from "@mui/icons-material";
import { Box, Typography, Card, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  editchildren,
  editnextofkin,
  editprofessional,
  editspouse,
} from "../redux/userSlice";

const EditDetailspage = ({ message, submessage, allowed, link }) => {
  const dispatch = useDispatch();
  const { user, updateStatus } = useSelector((state) => state.user);
  const [data, setData] = useState("");
  const values = {
    data: data || submessage,
    id: user.id,
    link: link,
  };
  console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link === "editnextofkin") {
      dispatch(editnextofkin(values));
      window.location.reload();
    }
    if (link === "editprofessional") {
      dispatch(editprofessional(values));
      window.location.reload();
    }
    if (link === "editchildren") {
      dispatch(editchildren(values));
      window.location.reload();
    }
    if (link === "editspouse") {
      dispatch(editspouse(values));
      window.location.reload();
    }
  };
  console.log(link);
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
          width: "1050px",
          height: "auto",
          position: "absolute",
          top: "10%",
          left: "0.8%",
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
            sx={{ width: "1005px" }}
          />
        </Box>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ margin: "20px" }}
        >
          Edit
        </Button>
        {updateStatus === "Updated successfully" && (
          <Typography sx={{ background: "green" }}>{updateStatus}</Typography>
        )}
        {updateStatus === "update Unsuccessful" && (
          <Typography sx={{ background: "red" }}>{updateStatus}</Typography>
        )}
      </Card>
    </Box>
  );
};

export default EditDetailspage;
