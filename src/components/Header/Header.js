import { Button, IconButton, Stack, useMediaQuery } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { activeHeaderMenuStyle, MenuItem, Nav } from './header.style';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
   const matchMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

   console.log(matchMd);
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
                  p: 1,
                  cursor: 'pointer'
               }}
            />
         )}

         {!matchMd && (
            <Stack spacing={5} direction='row' alignItems='center'>
               <MenuItem
                  component={NavLink}
                  to='/'
                  style={({ isActive }) =>
                     isActive ? activeHeaderMenuStyle : undefined
                  }
               >
                  Home
               </MenuItem>
               <MenuItem component={NavLink} to='/dashboard'>
                  Dashboard
               </MenuItem>
               <MenuItem>Our Portfolio</MenuItem>
               <MenuItem>Our Team</MenuItem>
               <Button>Login</Button>
            </Stack>
         )}
      </Nav>
   );
};

export default Header;
