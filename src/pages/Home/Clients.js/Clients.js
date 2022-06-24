import { Box } from '@mui/material';
import React from 'react';
import Client from '../../../components/Client/Client';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Clients = () => {
   return (
      <Box sx={{ mt: 11, mb: 12, width: '100%' }}>
         <SectionTitle title='Clients' colored='Feedback' />
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'space-between',
               flexDirection: { xs: 'column', md: 'row' },
               alignItems: 'center',
            }}
         >
            <Client />
            <Client />
            <Client />
         </Box>
      </Box>
   );
};

export default Clients;
