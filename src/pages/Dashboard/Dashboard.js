import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// drawer imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { MyDashboardMenuItem } from './dashboard.style';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';

// list imports
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useState } from 'react';

const drawerWidth = 210;

const activeMenuStyle = {
   color: '#009444',
   backgroundImage:
      'linear-gradient(to right, rgb(199 255 182 / 94%), rgb(226 255 217 / 1%))',
};

const Dashboard = (props) => {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const [user] = useAuthState(auth);
   const navigate = useNavigate();

   const [activeMenu, setActiveMenu] = useState('order');

   console.log(user);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   console.log(activeMenu);

   const drawer = (
      <Box>
         <Box sx={{ pt: 1, pb: 1.5 }}>
            <img
               src='https://i.ibb.co/JsvBDwD/logo.png'
               alt=''
               style={{
                  width: 150,
                  margin: '0 auto',
                  display: 'block',
                  cursor: 'pointer',
               }}
               onClick={() => navigate('/')}
            />
         </Box>

         <List sx={{ ml: 2 }}>
            <ListItem
               disablePadding
               component={NavLink}
               onClick={() => setActiveMenu('order')}
               to='order'
               style={({ isActive }) =>
                  isActive ? activeMenuStyle : { color: '#000' }
               }
            >
               <ListItemButton>
                  <ListItemIcon>
                     <ShoppingCartOutlinedIcon
                        sx={{
                           color: activeMenu === 'order' ? 'green' : '#000',
                        }}
                     />
                  </ListItemIcon>
                  <ListItemText primary='Orders' />
               </ListItemButton>
            </ListItem>
            <ListItem
               disablePadding
               component={NavLink}
               onClick={() => setActiveMenu('service')}
               to='service-list'
               style={({ isActive }) =>
                  isActive ? activeMenuStyle : { color: '#000' }
               }
            >
               <ListItemButton>
                  <ListItemIcon>
                     <DraftsIcon
                        sx={{
                           color: activeMenu === 'service' ? 'green' : '#000',
                        }}
                     />
                  </ListItemIcon>
                  <ListItemText primary='Service List' />
               </ListItemButton>
            </ListItem>
            <ListItem
               disablePadding
               component={NavLink}
               onClick={() => setActiveMenu('review')}
               to='review'
               style={({ isActive }) =>
                  isActive ? activeMenuStyle : { color: '#000' }
               }
            >
               <ListItemButton>
                  <ListItemIcon>
                     <DraftsIcon
                        sx={{
                           color: activeMenu === 'review' ? 'green' : '#000',
                        }}
                     />
                  </ListItemIcon>
                  <ListItemText primary='Review' />
               </ListItemButton>
            </ListItem>
         </List>
      </Box>
   );

   const container =
      window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar
            position='fixed'
            sx={{
               width: { sm: `calc(100% - ${drawerWidth}px)` },
               ml: { sm: `${drawerWidth}px` },
               background: '#fff',
               boxShadow: 0,
               py: 1,
            }}
         >
            <Toolbar>
               <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
                  <MenuIcon sx={{ color: 'primary.main' }} />
               </IconButton>
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     width: '100%',
                  }}
               >
                  <Typography
                     variant='h6'
                     noWrap
                     component='div'
                     sx={{ color: 'primary.main' }}
                  >
                     Responsive drawer
                  </Typography>
                  <Typography
                     variant='body2'
                     noWrap
                     component='div'
                     sx={{ color: 'primary.main' }}
                  >
                     {user?.displayName || 'No User'}
                  </Typography>
               </Box>
            </Toolbar>
         </AppBar>
         <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label='mailbox folders'
         >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {/* mobile menus */}
            <Drawer
               container={container}
               variant='temporary'
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                  },
               }}
            >
               {drawer}
            </Drawer>

            {/*  desktop menus */}
            <Drawer
               variant='permanent'
               sx={{
                  display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': {
                     boxSizing: 'border-box',
                     width: drawerWidth,
                     border: 0,
                  },
               }}
               open
            >
               {drawer}
            </Drawer>
         </Box>

         {/*  content area */}
         <Box
            component='main'
            sx={{
               flexGrow: 1,
               width: { sm: `calc(100% - ${drawerWidth}px)` },
               p: 3,
               background: '#f4f7fc',
               minHeight: '100vh',
            }}
         >
            <Toolbar />
            <Box>
               <Outlet />
            </Box>
         </Box>
      </Box>
   );
};

export default Dashboard;
