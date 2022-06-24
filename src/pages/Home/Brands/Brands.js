import { Box, styled } from '@mui/material';
import React from 'react';

const Wrapper = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   margin: '6rem 0 7rem 0',
   [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
   },
   '& img': {
      height: '60px',
      [theme.breakpoints.down('md')]: {
         marginBottom: '3rem',
      },
   },
}));

const Brands = () => {
   const brands = [
      'https://i.ibb.co/27wHw8Y/image-5.png',
      'https://i.ibb.co/vVSVd76/image-6.png',
      'https://i.ibb.co/Dwj3KYc/image-7.png',
      'https://i.ibb.co/99gcp3b/image-8.png',
      'https://i.ibb.co/Rhk2VSh/image-9.png',
   ];

   return (
      <Wrapper>
         {brands.map((brand, index) => (
            <img key={index} src={brand} alt={`brands ${index}`} />
         ))}
      </Wrapper>
   );
};

export default Brands;
