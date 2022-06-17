import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const Branding = () => {
   return (
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
   );
};

export default Branding;
