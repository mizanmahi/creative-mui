import { Button, styled } from '@mui/material';

export const MyDashboardMenuItem = styled(Button)(({ theme }) => ({
   color: '#474747',
   textDecoration: 'none',
   cursor: 'pointer',
   background: 'transparent',
   boxShadow: 'none',
   '&:hover': {
      background: 'transparent',
      boxShadow: 'none',
   },
}));
