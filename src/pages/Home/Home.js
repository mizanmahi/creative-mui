import { Box, Container, styled } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Branding from './Branding/Branding';
import Brands from './Brands/Brands';
import Projects from './Projects/Projects';
import Services from './Services/Services';

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
            <Brands />
            <Services />
         </Container>
         <Projects />
         <Footer />
      </>
   );
};

export default Home;
