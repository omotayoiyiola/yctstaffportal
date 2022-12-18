import { AppBar, Avatar, Box, Popover, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ArrowDropDown, Logout, Settings} from '@mui/icons-material';
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box>
         <AppBar position="static" sx={{background:'green',height:'60px'}}>
           <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
             <Box>
                <img src="https://staff.yabatech.edu.ng/toplogo.jpg" alt="" />
             </Box>
            <Box  sx={{color:'pointer',display:'flex'}}>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" sx={{width: 40, height: 40}} />      

                <Typography sx={{cursor:'pointer',marginTop:'9px'}}>
        Account 
      </Typography> 
      <ArrowDropDown aria-describedby={id} variant="contained" onClick={handleClick} sx={{fontSize:'2.4rem'}}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{display:'flex'}}>
        <Settings sx={{marginTop:'15px'}}/>
        <Typography sx={{ p: 2 }}>My profile</Typography>
        </Box>
       <Box sx={{display:'flex'}}>
        <Logout sx={{marginTop:'15px'}}/>
        <Typography sx={{ p: 2 }}>Logout</Typography>
        </Box>
       
      </Popover>
            </Box>
           </Toolbar>
         </AppBar>
    </Box>
  )
}

export default Header