import { Box, styled, TextareaAutosize, TextField } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
   backgroundColor: 'rgba(122, 178, 89, 0.15)',
   padding: '4rem',
   borderRadius: theme.spacing(2),
}));
export const Input = styled(TextField)(({ theme, fullWidth }) => ({
   maxWidth: '100%',
   width: '100%',
   fontSize: '18px',
   fontFamily: 'inherit',
   boxSizing: 'border-box',
   '& .MuiOutlinedInput-root': {
      color: '#000',
      '& fieldset': {
         borderWidth: 0,
         background: '#ffffff',
      },
      '&:hover fieldset': {
         borderWidth: 1,
         borderColor: '#7AB259',
      },
      '&.Mui-focused fieldset': {
         borderWidth: 1,
         borderColor: '#7AB259',
      },
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
      '&:focus': {
         outline: '1px solid #7AB259',
      }
   })
);
