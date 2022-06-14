import { Button, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { activeHeaderMenuStyle, MenuItem, Nav } from './header.style';

export const Header = () => {
   return (
      <Nav direction='row'>
         <img
            src='https://i.ibb.co/JsvBDwD/logo.png'
            alt=''
            style={{ width: 150 }}
         />

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
      </Nav>
   );
};

export default Header;
