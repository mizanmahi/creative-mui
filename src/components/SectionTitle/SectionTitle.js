import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ title, colored, sx }) => {
   return (
      <Box>
         <Typography
            textAlign='center'
            sx={{
               fontSize: '2.1rem',
               fontWeight: 'bold',
               '@media (max-width: 600px)': {
                  fontSize: '1.5rem',
               },
               ...sx,
            }}
         >
            {title}{' '}
            {colored && <span style={{ color: '#7AB259' }}>{colored}</span>}
         </Typography>
      </Box>
   );
};

export default SectionTitle;
