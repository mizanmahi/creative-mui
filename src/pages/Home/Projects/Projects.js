import { Container } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import SwiperSlider from '../../../components/swiper';
import { Wrapper } from './projects.style';

const Projects = () => {
   return (
      <Wrapper>
         <Container>
            <SectionTitle
               title='Here are some of'
               colored='our works'
               sx={{ my: 5, color: '#ffffff' }}
            />
         </Container>
         <SwiperSlider />
      </Wrapper>
   );
};

export default Projects;
