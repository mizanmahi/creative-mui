import { Button, Menu, MenuItem, Stack, useMediaQuery } from '@mui/material';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { activeHeaderMenuStyle, MyMenuItem, Nav } from './header.style';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
   const matchMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleMenuClick = (e) => {
      setAnchorEl(e.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const navigate = useNavigate();
   const [user] = useAuthState(auth);

   console.log(user);

   return (
      <Nav direction='row'>
         <img
            src='https://i.ibb.co/JsvBDwD/logo.png'
            alt=''
            style={{ width: 150 }}
         />

         {matchMd && (
            <MenuIcon
               sx={{
                  bgcolor: 'primary.main',
                  color: '#fff',
                  borderRadius: '3px',
                  fontSize: '2.5rem',
                  p: 1,
                  cursor: 'pointer',
               }}
               id='header-button'
               onClick={handleMenuClick}
            />
         )}

         {/* mobile menus */}
         <Menu
            id='header-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
            <MenuItem onClick={handleClose}>Our Portfolio</MenuItem>
            <MenuItem onClick={handleClose}>Our Team</MenuItem>
         </Menu>

         {!matchMd && (
            <Stack spacing={5} direction='row' alignItems='center'>
               <MyMenuItem
                  component={NavLink}
                  to='/'
                  style={({ isActive }) =>
                     isActive ? activeHeaderMenuStyle : undefined
                  }
               >
                  Home
               </MyMenuItem>
               <MyMenuItem component={NavLink} to='/dashboard/order'>
                  Dashboard
               </MyMenuItem>
               <MyMenuItem>Our Portfolio</MyMenuItem>
               <MyMenuItem>Our Team</MyMenuItem>

               {!user && (
                  <Button onClick={() => navigate('/login')}>Login</Button>
               )}
               {user && (
                  <Button endIcon={<LogoutIcon />} onClick={() => signOut(auth)}>
                     Logout
                  </Button>
               )}
            </Stack>
         )}
      </Nav>
   );
};

export default Header;
