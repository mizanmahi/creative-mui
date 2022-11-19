import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = ({ sx, ...props }) => {
   return (
      <CircularProgress
         sx={{
            '&.MuiCircularProgress-root': {
               height: '30px !important',
               width: '30px !important',
            },
            ...sx,
         }}
         {...props}
      />
   );
};

export default Loader;
