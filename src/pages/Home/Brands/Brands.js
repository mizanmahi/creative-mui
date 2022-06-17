import { Stack } from '@mui/material';
import React from 'react';

const Brands = () => {
   const brands = [
      'https://i.ibb.co/27wHw8Y/image-5.png',
      'https://i.ibb.co/vVSVd76/image-6.png',
      'https://i.ibb.co/Dwj3KYc/image-7.png',
      'https://i.ibb.co/99gcp3b/image-8.png',
      'https://i.ibb.co/Rhk2VSh/image-9.png',
   ];
   return (
      <Stack direction='row' spacing={8} sx={{my: 6}}>
         {brands.map((brand, index) => (
            <img
               key={index}
               src={brand}
               alt={`brands ${index}`}
               style={{ width: 'auto', height: '60px' }}
            />
         ))}
      </Stack>
   );
};

export default Brands;
