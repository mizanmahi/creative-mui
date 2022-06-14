import { Box, Container, styled } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Branding from './Branding/Branding';

const Intro = styled(Box)(({ theme }) => ({
   backgroundColor: theme.palette.primary.secondary,
   height: '85vh',
   clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
}));

const Home = () => {
   return (
      <>
         <Intro>
            <Container>
               <Header />
               <Branding />
            </Container>
         </Intro>
         <Container>
            <h3>Main</h3>
            <Footer />
         </Container>
      </>
   );
};

export default Home;
