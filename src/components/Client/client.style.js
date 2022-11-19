import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
   width: '100%',
   maxWidth: '400px',
   padding: '1.5rem',
   borderRadius: '4px',
  border: '1px solid #BFBFBF',
   marginTop: theme.spacing(8),
   // boxSizing: 'border-box',
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
