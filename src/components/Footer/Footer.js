import { Box, Typography, Button, Container, Divider } from '@mui/material';
import React from 'react';

const Footer = () => {
   return (
      <Box sx={{ bgcolor: 'primary.main', py: 10 }}>
         <Container>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
               }}
            >
               <Typography
                  sx={{
                     fontSize: '1.5rem',
                     fontWeight: 'bold',
                     color: 'white',
                  }}
               >
                  Creative Agency
               </Typography>

               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: 2,
                  }}
               >
                  <Typography
                     sx={{
                        color: ' rgba(255, 255, 255, 0.8)',
                     }}
                  >
                     Get Started?
                  </Typography>
                  <Button
                     sx={{
                        backgroundColor: 'primary.green',
                     }}
                  >
                     Get Started
                  </Button>
               </Box>
            </Box>
            <Divider sx={{
               mt: 5,
               backgroundColor: 'rgba(255, 255, 255, 0.2)'
            }} />

            <Box>
               
            </Box>
        
         </Container>
      </Box>
   );
};

export default Footer;
