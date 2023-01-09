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
  const { data, isLoading, isError } = useQuery(["stuff"], () => {
    try {
      return userRequest
        .get(`/staffrecord/${user.id}`)
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values?.officephone?.length !== 11 || values?.phoneNo?.length !== 11) {
      toast.error("phone number must be 11 digits");
    } else if (updateStatus === "update Unsuccessful") {
      toast.error("Update unsuccessful");
    } else {
      dispatch(updateBioData(values)) && toast.success("Update successful");
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
              width: { lg: "800px", md: "650px", sm: "580px", xs: "500px" },
              height: "auto",
              position: "absolute",
              top: { md: "5%", sm: "15vh", xs: "14vh" },
              left: { md: "2%", sm: "14%", xs: "6%" },
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
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
            <Box sx={{ minWidth: 120, margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                **Gender (MALE)
              </Typography>
              <FormControl fullWidth>
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
                fullWidth
              />
            </Box>
            <Box sx={{ minWidth: 120, margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                **Staff category (NON-TEACHING (SENIOR))
              </Typography>
              <FormControl fullWidth>
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
                type="number"
                placeholder={data?.fon}
                fullWidth
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                **Official phone number
              </Typography>
              <TextField
                type="number"
                placeholder={data?.fonoffi}
                fullWidth
                onChange={(e) => setOfficePhoneNo(e.target.value)}
              />
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                Official email address
              </Typography>
              <TextField
                placeholder={data?.emaloffi}
                fullWidth
                onChange={(e) => setOfficeEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                Personal email address
              </Typography>
              <TextField
                placeholder={data?.emal}
                fullWidth
                onChange={(e) => setPersonalEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ margin: "20px" }}>
              <Typography sx={{ fontWeight: "bolder" }}>
                **Home address (will not be published)
              </Typography>
              <TextField
                placeholder={data?.addy}
                fullWidth
                onChange={(e) => setHomeAddress(e.target.value)}
              />
            </Box>
            <Button
              variant="contained"
              sx={{ margin: "20px", padding: "15px", background: "green" }}
              onClick={handleSubmit}
              disabled={
                title === "" &&
                phoneNo === "" &&
                officePhoneNo === "" &&
                officeemail === "" &&
                personalemail === "" &&
                homeAddress === "" &&
                gender === "" &&
                category === ""
                  ? true
                  : false
              }
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
