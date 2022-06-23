import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
   width: '100%',
   maxWidth: 400,
   padding: '1.5rem',
   borderRadius: '8px',
   boxShadow: '0px 4px 80px rgba(0, 0, 0, 0.1)',
   marginTop: theme.spacing(8),
   '&:not(:last-child)': {
      marginRight: '2rem',
      [theme.breakpoints.down('md')]: {
         marginRight: '0',
      },
   },
}));

export const AvatarBox = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
}));

export const Details = styled(Box)(({ theme }) => ({
   marginRight: theme.spacing(2),
}));
