import { Delete, Download } from "@mui/icons-material";
import { Box, Typography, Card, TextField, Button } from "@mui/material";
import React from "react";

const FileMangement = () => {
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
          width: "1050px",
          height: "auto",
          position: "absolute",
          top: "10%",
          left: "0.8%",
        }}
      >
        <Box sx={{ padding: "15px", background: "green", color: "white" }}>
          <Typography sx={{ fontSize: "1.35rem", fontWeight: "bolder" }}>
            Upload Documents
          </Typography>
        </Box>
        <Box sx={{ margin: "-12px", padding: "47px" }}>
          <Typography>Title</Typography>
          <TextField
            disabled
            inputProps={{
              style: {
                height: "70px",
              },
            }}
            sx={{ width: "1005px" }}
          />
          <Box sx={{ display: "flex", marginTop: "10px" }}>
            <Button
              sx={{ background: "green", color: "white", marginRight: "8px" }}
              href="/dashboard"
            >
              BROWSE DOCS(PDF FORMAT ONLY)
            </Button>
            <TextField sx={{ width: "650px" }} />
          </Box>
        </Box>
        <Button
          sx={{
            background: "green",
            color: "white",
            margin: "30px",
            height: "40px",
          }}
        >
          BROWSE DOCS(PDF FORMAT ONLY)
        </Button>
      </Card>
      <Card
        sx={{
          width: "1050px",
          height: "auto",
          position: "absolute",
          top: "40%",
          left: "0.8%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
            alignItems: "center",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <Typography>S/N</Typography>
          <Typography>TITLE</Typography>
          <Typography>DATE UPLOADED</Typography>
          <Typography> DOWNLOAD FILE</Typography>
          <Typography>DELETE FILE</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
            alignItems: "center",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <Typography>1</Typography>
          <Typography>My photograph</Typography>
          <Typography>Dec 28, 2019 01:42 pm</Typography>
          <Button variant="contained" startIcon={<Download />}>
            DOWNLOAD FILE
          </Button>
          <Button variant="contained" startIcon={<Delete />}>
            DELETE FILE
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
            alignItems: "center",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <Typography>2</Typography>
          <Typography>My photograph</Typography>
          <Typography>Dec 28, 2019 01:42 pm</Typography>
          <Button variant="contained" startIcon={<Download />}>
            DOWNLOAD FILE
          </Button>
          <Button variant="contained" startIcon={<Delete />}>
            DELETE FILE
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
            alignItems: "center",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <Typography>3</Typography>
          <Typography>My photograph</Typography>
          <Typography>Dec 28, 2019 01:42 pm</Typography>
          <Button variant="contained" startIcon={<Download />}>
            DOWNLOAD FILE
          </Button>
          <Button variant="contained" startIcon={<Delete />}>
            DELETE FILE
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
            alignItems: "center",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <Typography>4</Typography>
          <Typography>My photograph</Typography>
          <Typography>Dec 28, 2019 01:42 pm</Typography>
          <Button variant="contained" startIcon={<Download />}>
            DOWNLOAD FILE
          </Button>
          <Button variant="contained" startIcon={<Delete />}>
            DELETE FILE
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid black",
            alignItems: "center",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <Typography>5</Typography>
          <Typography>My photograph</Typography>
          <Typography>Dec 28, 2019 01:42 pm</Typography>
          <Button variant="contained" startIcon={<Download />}>
            DOWNLOAD FILE
          </Button>
          <Button variant="contained" startIcon={<Delete />}>
            DELETE FILE
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            padding: "15px",
          }}
        >
          <Typography>6</Typography>
          <Typography>My photograph</Typography>
          <Typography>Dec 28, 2019 01:42 pm</Typography>
          <Button variant="contained" startIcon={<Download />}>
            DOWNLOAD FILE
          </Button>
          <Button variant="contained" startIcon={<Delete />}>
            DELETE FILE
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default FileMangement;
