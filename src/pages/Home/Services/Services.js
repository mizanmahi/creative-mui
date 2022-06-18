import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Service from '../../../components/Service/Service';

const Services = () => {
   return (
      <Box sx={{ my: 12 }}>
         <SectionTitle
            title='Provide awesome'
            colored='services'
            sx={{ mb: 10 }}
         />

         <Grid container spacing={2} justifyContent='center'>
            {[
               'https://i.ibb.co/HNhykGp/iphone-1.png',
               'https://i.ibb.co/r0gHkvM/color-palette-1.png',
               'https://i.ibb.co/CvQwzKC/coding-1.png',
            ].map((item) => (
               <Grid item xs={12} sm={6} md={4} justifyContent='center'>
                  <Service image={item}/>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default Services;
