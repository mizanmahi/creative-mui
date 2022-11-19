import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
   height: 'calc(100vh - 64px)',
}));
export const LoginBox = styled(Box)(({ theme }) => ({
   border: '1px solid #ABABAB',
   boxShadow: '0 4 4 0 rgba(0,0,0,0.5)',
   height: '500px',
   width: '600px',
   maxWidth: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: '5px',
}));

export const GoogleButton = styled(Box)(({ theme }) => ({
   border: '1px solid #C7C7C7',
   padding: '0.8rem',
   borderRadius: '55px',
   width: '70%',
   margin: '0 auto',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   position: 'relative',
   color: '#000000',
   fontWeight: 500,
   cursor: 'pointer',
   minWidth: '280px',
   '&:hover': {
      boxShadow: '0 4px 15px 5px rgba(0,0,0,0.1)',
   },
   '& img': {
      position: 'absolute',
      left: ' 0.5rem',
   },
}));
