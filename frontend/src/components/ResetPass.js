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
import { MDBSpinner } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUserPassword } from "../redux/userSlice";
const ResetPass = () => {
  const { user, error, loading, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [questions, setQuestion] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
    answer: "",
    securityquestion: "",
    id: user?.id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetUserPassword(questions));
  };

  console.log(questions);
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
          height: "auto",
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
          <Typography sx={{ fontWeight: "bolder" }}>Old Password</Typography>
          <TextField
            type="password"
            placeholder="old password"
            onChange={(e) =>
              setQuestion({ ...questions, oldpassword: e.target.value })
            }
            sx={{ width: "340px" }}
          />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>New password</Typography>
          <TextField
            type="password"
            placeholder="new password"
            onChange={(e) =>
              setQuestion({ ...questions, newpassword: e.target.value })
            }
            sx={{ width: "340px" }}
          />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Confirm New Password
          </Typography>
          <TextField
            type="password"
            placeholder="new password"
            onChange={(e) =>
              setQuestion({ ...questions, confirmpassword: e.target.value })
            }
            sx={{ width: "340px" }}
          />
        </Box>
        <Box sx={{ minWidth: 120, margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Security Question
          </Typography>
          <>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Security questions
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="security questions"
                onChange={(e) =>
                  setQuestion({
                    ...questions,
                    securityquestion: e.target.value,
                  })
                }
              >
                <MenuItem value="Favourite Color">Favourite color</MenuItem>
                <MenuItem value="Favourite Food">Favourite food</MenuItem>
                <MenuItem value="Favourite_PetName">
                  Favourite pet name
                </MenuItem>
                <MenuItem value="Favourite_MiddleName">
                  Fathers middle name
                </MenuItem>
                <MenuItem value="Mothers_MiddleName">
                  Mothers middle name
                </MenuItem>
              </Select>
            </FormControl>
          </>
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Answer to Security Question (Only one word is recommended as answer)
          </Typography>
          <TextField
            placeholder="Answer"
            onChange={(e) =>
              setQuestion({ ...questions, answer: e.target.value })
            }
            sx={{ width: "880px" }}
          />
        </Box>
        {error ? (
          <Typography
            sx={{
              background: "red",
              width: "320px",
              padding: "10px",
              margin: "15px",
              color: "white",
            }}
          >
            {error}
          </Typography>
        ) : null}
        {status ? (
          <Typography
            sx={{
              background: "blue",
              width: "320px",
              padding: "10px",
              margin: "15px",
              color: "white",
            }}
          >
            {status}
          </Typography>
        ) : null}
        <Button
          sx={{ margin: "20px" }}
          variant="contained"
          onClick={handleSubmit}
          disabled={
            !questions.oldpassword ||
            !questions.newpassword ||
            !questions.confirmpassword ||
            !questions.answer ||
            !questions.securityquestion
              ? true
              : false
          }
        >
          {loading && <MDBSpinner />} SUBMIT
        </Button>
      </Card>
    </Box>
  );
};

export default ResetPass;
