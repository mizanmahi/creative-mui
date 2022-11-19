import { Box, styled, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const BrandingWrapper = styled(Box)(({ theme }) => ({
   backgroundColor: 'rgba(122, 178, 89, 0.15)',
   height: '70vh',
   clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
   padding: theme.spacing(5),
   borderRadius: theme.spacing(2),
   border: 'inset(0% 45% 0% 45% round 10px)'
}));

const Branding = () => {
   return (
      <BrandingWrapper>
         <Box>
            <Grid container>
               <Grid item sm={6} xs={12} columnSpacing={6} alignItems='center'>
                  <Stack
                     alignItems='left'
                     spacing={3}
                     sx={{ mt: 10, alignItems: 'flex-start' }}
                  >
                     <Typography
                        sx={{
                           fontSize: '4rem',
                           fontWeight: 600,
                           color: 'primary.main',
                           lineHeight: '80px',
                        }}
                     >
                        Let’s Grow Your Brand To The Next Level
                     </Typography>
                     <Typography
                        sx={{
                           width: ['100%', '80%'],
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Purus commodo ipsum duis laoreet maecenas. Feugiat
                     </Typography>
                     <Button>Hire Us</Button>
                  </Stack>
               </Grid>
               <Grid item sm={6} xs={12}>
                  <Box>
                     <img
                        src='https://i.ibb.co/sPXVMbC/Frame.png'
                        alt=''
                        style={{
                           maxWidth: '100%',
                           transform: 'scale(1)',
                           marginTop: '5rem',
                        }}
                     />
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </BrandingWrapper>
   );
};

export default Branding;
