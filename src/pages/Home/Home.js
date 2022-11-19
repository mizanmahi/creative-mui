import { Box, Container, styled } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Branding from './Branding/Branding';
import Brands from './Brands/Brands';
import Clients from './Clients.js/Clients';
import Faq from './Faq/Faq';
import NewsLetter from './NewsLetter/NewsLetter';
import OurWorks from './OurWorks/OurWorks';
import Projects from './Projects/Projects';
import Services from './Services/Services';

const Home = () => {
   return (
      <>
         <Branding />

         <Brands />

         <Services />

         <OurWorks />

         <Projects />

         <Clients />

         <NewsLetter />

         <Faq />
      </>
   );
};

export default Home;
