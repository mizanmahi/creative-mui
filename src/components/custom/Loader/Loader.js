import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
   return (
      <CircularProgress
         sx={{
            '&.MuiCircularProgress-root': {
               height: '30px !important',
               width: '30px !important',
            },
         }}
      />
   );
};

export default Loader;
