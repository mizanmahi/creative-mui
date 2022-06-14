import { Stack, styled, Typography } from '@mui/material';

export const Nav = styled(Stack)(({ theme }) => ({
   padding: '40px 0',
   justifyContent: 'space-between',
   alignItems: 'center',
}));
export const MenuItem = styled(Typography)(({ theme }) => ({
   color: '#474747',
   textDecoration: 'none',
}));

export const activeHeaderMenuStyle = {
   color: '#474747',
   fontWeight: 'bold',
   textDecoration: 'underline',
   textDecorationColor: '#7AB259',
   textDecorationStyle: 'solid',
   textDecorationThickness: '3px',
   textDecorationWidth: '1px',
};
