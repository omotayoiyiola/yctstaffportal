import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Myextens = () => {
  return (
    <Box
      sx={{
        flex: 3,
        height: "auto",
        position: "relative",
      }}
    >
      <Box
        sx={{ textAlign: "center", alignItems: "center", marginTop: "80px" }}
      >
        <Typography sx={{ color: "green" }} variant="h3" gutterBottom>
          My VoIP Extension : <span style={{ color: "red" }}>2008</span>{" "}
        </Typography>
        <Typography variant="h6" sx={{ margin: "10px" }} gutterBottom>
          You can now make free calls to other staff within the college
          (LAN/Wireless) network, using your smart phone, computer or IP phone.
          Download and install Zoiper App for desktop/laptop, Zoiper App for
          Smartphone on the respective playstore/appstore and visit CITM office
          for a 1 minute configuration.
        </Typography>
      </Box>
      <Grid
        sx={{ textAlign: "center", alignItems: "center" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} lg={4} md={6}>
          <Box
            sx={{
              border: "1px solid black",
              height: "320px",
              padding: "10px",
              marginLeft: "7px",
            }}
          >
            <img
              src="https://staff.yabatech.edu.ng/images/adv/zoiperlogo.png"
              alt=""
              style={{ flex: 1 }}
            />
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bolder" }}>
              Zoiper App for Android/iPhone
            </Typography>
            <Typography sx={{ fontSize: "1rem", padding: "10px" }}>
              For android app, visit the Google Playstore through your phone and
              download "Zoiper IAX SIP VOIP Softphone". On iPhone Appstore,
              download "Zoiper".
            </Typography>
            <Button variant="contained" sx={{ bgcolor: "green" }}>
              Download now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Box
            sx={{ border: "1px solid black", height: "320px", padding: "10px" }}
          >
            <img
              src="https://staff.yabatech.edu.ng/images/adv/zoiperlogo.png"
              alt=""
              style={{ flex: 1 }}
            />
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bolder" }}>
              Zoiper App for Android/iPhone
            </Typography>
            <Typography sx={{ fontSize: "1rem", padding: "10px" }}>
              For android app, visit the Google Playstore through your phone and
              download "Zoiper IAX SIP VOIP Softphone". On iPhone Appstore,
              download "Zoiper".
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <Box
            sx={{ border: "1px solid black", height: "320px", padding: "10px" }}
          >
            <img
              src="https://staff.yabatech.edu.ng/images/adv/zoiperlogo.png"
              alt=""
              style={{ flex: 1 }}
            />
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "bolder" }}>
              Zoiper App for Android/iPhone
            </Typography>
            <Typography sx={{ fontSize: "1rem", padding: "10px" }}>
              For android app, visit the Google Playstore through your phone and
              download "Zoiper IAX SIP VOIP Softphone". On iPhone Appstore,
              download "Zoiper".
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Myextens;
