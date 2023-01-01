import React, { useState } from "react";
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
import { useQuery } from "@tanstack/react-query";

import { ArrowBack } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { updateBioData } from "../redux/userSlice";
import { MDBSpinner } from "mdb-react-ui-kit";
import { userRequest } from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Editbiodata = () => {
  const [title, setTitle] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [officeemail, setOfficeEmail] = useState("");
  const [personalemail, setPersonalEmail] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [officePhoneNo, setOfficePhoneNo] = useState("");
  const { user, updateStatus } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBioData(values));
    if (updateStatus === "update Unsuccessful") {
      toast.error("Update successful");
      console.log("yes");
    } else {
      nav("/viewprofile");
    }
    //
  };
  console.log(user.id);
  const { data, isLoading, isError } = useQuery(["stuff"], () => {
    try {
      return userRequest
        .get(`/api/staffrecord/${user.id}`)
        .then((res) => res.data[0]);
    } catch (error) {
      isError(error);
    }
  });
  const values = {
    title: title || data?.titl,
    phoneNo: phoneNo || data?.fon,
    officeemail: officeemail || data?.emaloffi,
    personalemail: personalemail || data?.emal,
    homeAddress: homeAddress || data?.addy,
    gender: gender || data?.sexx,
    category: category || data?.categ,
    officephone: officePhoneNo || data?.fonoffi,
    id: user.id,
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
      {isLoading ? (
        <MDBSpinner
          style={{
            background: "purple",
            position: "absolute",
            top: "20%",
            left: "40%",
            fontSize: "20rem",
          }}
          size="large"
          color="secondary"
        />
      ) : (
        <>
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
              <TextField
                placeholder={data?.titl}
                sx={{ width: "890px" }}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
            <Box sx={{ minWidth: 120, margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                **Gender (MALE)
              </Typography>
              <FormControl sx={{ width: "890px" }}>
                <InputLabel id="demo-simple-select-label">
                  {data?.sexx}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="MALE">MALE</MenuItem>
                  <MenuItem value="FEMALE">FEMALE</MenuItem>
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
                  {data?.categ}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="security questions"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value="ACADEMIC STAFF">ACADEMIC STAFF</MenuItem>
                  <MenuItem value="NON-TEACHING (SENOIR)">
                    NON-TEACHING (SENOIR)
                  </MenuItem>
                  <MenuItem value="NON-TEACHING (JUNIOR)">
                    NON-TEACHING (JUNIOR)
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                **Personal phone number
              </Typography>
              <TextField
                placeholder={data?.fon}
                sx={{ width: "890px" }}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                **Official phone number
              </Typography>
              <TextField
                placeholder={data?.fonoffi}
                sx={{ width: "890px" }}
                onChange={(e) => setOfficePhoneNo(e.target.value)}
              />
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                Official email address
              </Typography>
              <TextField
                placeholder={data?.emaloffi}
                sx={{ width: "890px" }}
                onChange={(e) => setOfficeEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                Personal email address
              </Typography>
              <TextField
                placeholder={data?.emal}
                sx={{ width: "890px" }}
                onChange={(e) => setPersonalEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                **Home address (will not be published)
              </Typography>
              <TextField
                placeholder={data?.addy}
                sx={{ width: "890px" }}
                onChange={(e) => setHomeAddress(e.target.value)}
              />
            </Box>
            <Button
              variant="contained"
              sx={{ margin: "20px", padding: "15px", background: "green" }}
              onClick={handleSubmit}
            >
              {updateStatus === "pending" && <MDBSpinner />} UPDATE NOW
            </Button>

            {updateStatus === "update unsuccessful" && (
              <Typography sx={{ background: "red" }}>{updateStatus}</Typography>
            )}
            {updateStatus === "Update successful" && (
              <Typography sx={{ background: "green" }}>
                {updateStatus}
              </Typography>
            )}
          </Card>
        </>
      )}
    </Box>
  );
};

export default Editbiodata;
