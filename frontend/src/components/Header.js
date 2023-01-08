import {
  AppBar,
  Avatar,
  Box,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ArrowDropDown, Logout, Settings } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userSlice";
const Header = ({ pix }) => {
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logoutUser());
    nav("/login");
  };
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <AppBar position="fixed" sx={{ background: "green", height: "60px" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Link to="/">
              <img src="https://staff.yabatech.edu.ng/toplogo.jpg" alt="" />
            </Link>
          </Box>
          <Box sx={{ color: "pointer", display: "flex" }}>
            <Avatar alt="Remy Sharp" src={pix} sx={{ width: 40, height: 40 }} />

            <Typography sx={{ cursor: "pointer", marginTop: "9px" }}>
              Account
            </Typography>
            <ArrowDropDown
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              sx={{ fontSize: "2.4rem" }}
            />
            {user && (
              <>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Settings sx={{ marginTop: "15px" }} />
                    <Typography sx={{ p: 2 }}>My profile</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Logout sx={{ marginTop: "15px" }} />
                    <Typography
                      onClick={handleLogout}
                      sx={{ p: 2, cursor: "pointer" }}
                    >
                      Logout
                    </Typography>
                  </Box>
                </Popover>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
