import {
  ChangeCircleOutlined,
  Preview,
  Person,
  CloudUpload,
  Edit,
  Create,
  Publish,
  ExpandMore,
  CoPresent,
  Settings,
  ArrowForwardIos,
  MenuBook,
  LibraryBooks,
  FileOpen,
  FilePresent,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  const drawerMenuItemData = [
    {
      title: "Settings",
      submenu: [
        {
          title: "Change Password",
          icon: ChangeCircleOutlined,
          link: "resetpass",
        },
      ],
      icon: Settings,
    },
    {
      title: "Profile",
      submenu: [
        { title: "View profile", icon: Preview, link: "viewprofile" },
        { title: "Upload passport", icon: CloudUpload, link: "uploadPass" },
        { title: "Upload signature", icon: Publish, link: "uploadSignature" },
        { title: "Edit biodata", icon: Edit, link: "editbiodata" },
        {
          title: "Edit academic qualification",
          icon: Create,
          link: "editAcadqualification",
        },
        {
          title: "Edit professional qualification",
          icon: Create,
          link: "editprofqualification",
        },
        { title: "Edit next of kin", icon: Edit, link: "editnextofkin" },
        { title: "Edit children", icon: Edit, link: "editChildren" },
        { title: "Edit spouse", icon: Edit, link: "editSpouse" },
      ],
      icon: Person,
    },
    {
      title: "Academic Staff",
      submenu: [
        { title: "Research areas", icon: MenuBook, link: "researchareas" },
        {
          title: "Seminars and conferences",
          icon: CloudUpload,
          link: "seminars",
        },
        { title: "All publications", icon: LibraryBooks, link: "mypub" },
        { title: "Resume/CV", icon: CoPresent, link: "mycv" },
        {
          title: "Upload publications",
          icon: CloudUpload,
          link: "publications",
        },
        { title: "Researchgate profile", icon: Person, link: "researchgate" },
      ],
      icon: Person,
    },
    {
      title: "File management",
      submenu: [{ title: "My files", icon: FilePresent, link: "docmgt" }],
      icon: FileOpen,
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState("");

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex("");
    } else {
      setSelectedIndex(index);
    }
  };
  return (
    <Box
      position="sticky"
      sx={{
        display: { xs: "none", sm: "none", lg: "block", md: "block" },
        backgroundColor: "green",
        height: "280vh",
        flex: 0.65,
      }}
    >
      <List
        sx={{
          marginTop: "80px",
          width: "100%",
          maxWidth: 360,
          bgcolor: "transparent",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListItemButton
            component="div"
            id="nested-list-subheader"
            sx={{ bgcolor: "transparent", display: "flex" }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", margin: "10px" }}
            >
              <Typography sx={{ color: "white", fontWeight: "bolder" }}>
                IYIOLA OMOTAYO
              </Typography>
              <Typography
                sx={{
                  color: "#ffcfbe",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                PRINCIPAL PROGRAMME ANALYST
              </Typography>
            </Box>
          </ListItemButton>
        }
      >
        {drawerMenuItemData.map((item, index) => (
          <List>
            <ListItemButton
              sx={{ color: "white", fontWeight: "bolder" }}
              key={index}
              button
              onClick={() => {
                handleClick(index);
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ fontFamily: "'Roboto', sans-serif" }}
              />
              {index === selectedIndex ? <ExpandMore /> : <ArrowForwardIos />}
            </ListItemButton>
            <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.submenu.map((sub, index) => {
                  return (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"/" + sub.link}
                    >
                      <ListItem>
                        <ListItemIcon sx={{ color: "black" }}>
                          <sub.icon />
                        </ListItemIcon>
                        <ListItemText
                          primary={sub.title}
                          sx={{
                            color: "white",
                            fontWeight: "bolder",
                            textAlign: "center",
                            fontFamily: "Unbounded, cursive",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginLeft: "-10px",
                          }}
                        />
                      </ListItem>
                    </Link>
                  );
                })}
              </List>
            </Collapse>
          </List>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
