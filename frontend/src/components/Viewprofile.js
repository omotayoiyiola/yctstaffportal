import { ArrowBack, Edit } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";

const Viewprofile = () => {
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
          <img
            style={{ height: "100px" }}
            src=" https://staff.yabatech.edu.ng/staffimgg/1582018875mypass.jpg"
            alt=""
          />
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
            AD/R/S.2214
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
            IYIOLA OMOTAYO
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
            MALE
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
            CENTRE FOR INFORMATION TECHNOLOGY AND MANAGEMENT
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
            PRINCIPAL PROGRAMME ANALYST
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
            NON-TEACHING (SENIOR)
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
            omotayo.iyiola@yabatech.edu.ng
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
            07031936856
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
            OSUN
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
            BORIPE
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
            Is any of the above profile having errors? Please click the button
            below.
          </Typography>
          <Button
            startIcon={<Edit />}
            variant="contained"
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
    </Box>
  );
};

export default Viewprofile;
