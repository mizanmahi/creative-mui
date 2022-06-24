import { Box, styled, TextareaAutosize } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
   background: theme.palette.primary.secondary,
   padding: '3.9rem 0',
}));
export const Input = styled('input')(({ theme, fullWidth }) => ({
   height: 50,
   maxWidth: '100%',
   width: '100%',
   border: 0,
   outline: 0,
   borderRadius: '3px',
   padding: '8px 0 8px 8px',
   fontSize: '18px',
   fontFamily: 'inherit',
   boxSizing: 'border-box',
   '&::placeholder': {
      fontSize: '18px',
      color: 'rgba(0,0,0,0.5)',
      fontFamily: 'inherit',
   },
   marginBottom: '1.5rem',
}));

export const MyTextareaAutosize = styled(TextareaAutosize)(
   ({ theme, fullWidth }) => ({
      height: 50,
      maxWidth: '100%',
      width: '100%',
      boxSizing: 'border-box',
      border: 0,
      outline: 0,
      borderRadius: '3px',
      padding: '8px 0 8px 8px',
      fontSize: '18px',
      fontFamily: 'inherit',
      '&::placeholder': {
         fontSize: '18px',
         color: 'rgba(0,0,0,0.5)',
         fontFamily: 'inherit',
      },
   })
);
