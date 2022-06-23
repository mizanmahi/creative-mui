import { createTheme } from '@mui/material';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#111430',
         secondary: '#FBD062',
      },
   },
   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: 'lg',
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontSize: '1rem',
               padding: '0.6rem 2.5rem',
            },
         },
         defaultProps: {
            variant: 'contained',
            color: 'primary',
            disableRipple: true,
         },
      },
   },

   typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
   },
});
