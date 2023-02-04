import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Header2 from '../Header2/Header2';

const Layout = () => {
   return (
      <>
         <Container>
            {/* <Header /> */}
            <Header2 />
            <Outlet />
         </Container>
         <Footer />
      </>
   );
};

export default Layout;
