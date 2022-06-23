import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
   return (
      <Box sx={{bgcolor: 'primary.main', py: 5}}>
         <Typography textAlign='center' color='primary.secondary'>
            Copyright Creative labs 2022
         </Typography>
      </Box>
   );
};

export default Footer;
