import {
  ChangeCircleOutlined,
  Preview,
  Person,
  CloudUpload,
  Edit,
  Create,
  Publish,
  ExpandMore,
  MeetingRoom,
  CoPresent,
  Settings,
  ArrowForwardIos,
  MenuBook,
  LibraryBooks,
  FileOpen,
  ModeEdit,
  HomeWork,
  Groups2,
  Collections,
  ContactsOutlined,
  HelpCenter,
  HelpCenterOutlined,
  FilePresent,
} from "@mui/icons-material";
import {
  Avatar,
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
      title: "SETTINGS",
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
      title: "PROFILE",
      submenu: [
        { title: "View profile", icon: Preview, link: "viewprofile" },
        { title: "Upload passport", icon: CloudUpload, link: "uploadPass" },
        { title: "Upload signature", icon: Publish, link: "uploadSignature" },
        { title: "Edit biodata", icon: Edit, link: "viewprofile" },
        {
          title: "Edit academic qualification",
          icon: Create,
          link: "viewprofile",
        },
        {
          title: "Edit professional qualification",
          icon: Create,
          link: "viewprofile",
        },
        { title: "Edit next of kin", icon: Edit, link: "viewprofile" },
        { title: "Edit children", icon: Edit, link: "viewprofile" },
        { title: "Edit spouse", icon: Edit, link: "viewprofile" },
      ],
      icon: Person,
    },
    {
      title: "ACADEMIC STAFF",
      submenu: [
        { title: "Research areas", icon: MenuBook },
        { title: "Seminars and conferences", icon: CloudUpload },
        { title: "All publications", icon: LibraryBooks },
        { title: "Resume/CV", icon: CoPresent },
        { title: "Upload publications", icon: CloudUpload },
        { title: "Researchgate profile", icon: Person },
      ],
      icon: Person,
    },
    {
      title: "OFFICE EXTENSION",
      submenu: [{ title: "My extension", icon: MeetingRoom }],
      icon: MeetingRoom,
    },
    {
      title: "FILE MANAGEMENT",
      submenu: [{ title: "My files", icon: FilePresent }],
      icon: FileOpen,
    },
    {
      title: "REGISTRY",
      submenu: [{ title: "Apply for leave", icon: ModeEdit }],
      icon: HomeWork,
    },
    {
      title: "SOCIAL HUB",
      submenu: [
        { title: "Picture gallery", icon: Collections },
        { title: "Social media addresses", icon: ContactsOutlined },
      ],
      icon: Groups2,
    },
    {
      title: "SUPPORT",
      submenu: [{ title: " Contact ICT", icon: HelpCenterOutlined }],
      icon: HelpCenter,
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
        display: { xs: "none", sm: "none", lg: "block" },
        backgroundColor: "green",
        height: "195vh",
        flex: 1,
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
            <Avatar
              sx={{ marginTop: "10px" }}
              src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=400"
            />
            <Box
              sx={{ display: "flex", flexDirection: "column", margin: "10px" }}
            >
              <Typography sx={{ color: "white", fontWeight: "bolder" }}>
                IYIOLA OMOTAYO
              </Typography>
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
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
