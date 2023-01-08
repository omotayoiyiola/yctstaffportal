import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { MDBSpinner } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../redux/userSlice";
const ConfirmAcount = () => {
  const { user, loading, error, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [questions, setQuestion] = useState({
    newpassword: "",
    confirmpassword: "",
    id: user?.id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    user
      ? dispatch(resetPassword(questions))
      : toast.info("please answer your security questions first ");
  };
  useEffect(() => {
    error && toast.error(error);
    status && toast.success(status) && nav("/login");
  }, [error, status, nav]);

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
          top: "20vh",
          left: "20%",
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
        <Box sx={{ margin: "20px", alignItems: "center", textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bolder" }}>New password</Typography>
          <TextField
            type="password"
            placeholder="new password"
            onChange={(e) =>
              setQuestion({ ...questions, newpassword: e.target.value })
            }
            sx={{ width: "500px" }}
          />
        </Box>
        <Box sx={{ margin: "20px", alignItems: "center", textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Confirm New Password
          </Typography>
          <TextField
            type="password"
            placeholder="new password"
            onChange={(e) =>
              setQuestion({ ...questions, confirmpassword: e.target.value })
            }
            sx={{ width: "500px" }}
          />
        </Box>
        <Box sx={{ margin: "20px", alignItems: "center", textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={
              !questions.newpassword || !questions.confirmpassword
                ? true
                : false
            }
          >
            {loading && <MDBSpinner />} SUBMIT
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ConfirmAcount;
