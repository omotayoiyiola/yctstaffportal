import { ArrowBack, Edit } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { userRequest } from "../api";
import { useNavigate } from "react-router-dom";
import { MDBSpinner } from "mdb-react-ui-kit";

const Viewprofile = () => {
  const nav = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { data, isLoading, isError } = useQuery(
    ["stuff"],
    () => {
      try {
        return userRequest
          .get(`/api/staffrecord/${user.id}`)
          .then((res) => res.data[0]);
      } catch (error) {
        isError(error);
      }
    },
    {
      cacheTime: 1000,
      enabled: true,
    }
  );
  const handleClick = () => {
    nav("/editbiodata");
  };
  console.log(data);
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
        sx={{
          background: "#f44336",
          marginTop: "70px",
          marginLeft: "10px",
          color: "white",
        }}
      >
        Back Home
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
              height: "height",
              position: "absolute",
              top: "10%",
              left: "5%",
            }}
          >
            <Box sx={{ display: "flex", margin: "18px" }}>
              <img src="https://staff.yabatech.edu.ng/yabalogo2.jpg" alt="" />
              <Typography
                sx={{ fontSize: "1.5rem", margin: "5px", fontWeight: "bolder" }}
              >
                YABA COLLEGE OF TECHNOLOGY : STAFF PROFILE
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.3rem", margin: "5px", marginRight: "19px" }}
              >
                Staff passport :
              </Typography>
              <img style={{ height: "100px" }} src={data?.imgg} alt="" />
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                Staff ID number:
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                {data?.staffno}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                Full Name :
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                {data?.fulln}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                Gender :
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                {data?.sexx}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                Department :
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                {data?.dept}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                Designation :
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                {data?.ranc}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                Category :
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                {data?.categ}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                Official Email :
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                {data?.emaloffi}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                Phone :
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {data?.fon}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                State of origin :
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {data?.orig}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                Local government area :
              </Typography>
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {data?.lga}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "18px",
                borderBottom: "1px solid grey",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                Signature :
              </Typography>
              <img
                src="https://staff.yabatech.edu.ng/staffsign/1565326848mysignature.jpg"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "18px",
                padding: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", margin: "5px", marginRight: "19px" }}
              >
                {" "}
                Is any of the above profile having errors? Please click the
                button below.
              </Typography>
              <Button
                startIcon={<Edit />}
                variant="contained"
                onClick={handleClick}
                sx={{
                  width: "22%",
                  background: "#2f4f73",
                  fontSize: "15px",
                  padding: "18px",
                }}
              >
                EDIT MY PROFILE
              </Button>
            </Box>
          </Card>
        </>
      )}
    </Box>
  );
};

export default Viewprofile;
