import { Avatar, Typography } from '@mui/material';
import React from 'react';
import { AvatarBox, Details, Wrapper } from './client.style';

const Client = () => {
   return (
      <Wrapper>
         <AvatarBox sx={{mb: 3}}>
            <Avatar
               alt='Remy Sharp'
               src='https://i.ibb.co/dc4G3dM/Ellipse-90.png'
               sx={{ mr: 2, width: 60, height: 60 }}
            />
            <Details>
               <Typography variant='h6'>John Doe</Typography>
               <Typography variant='body'>CEO, XYZ Inc.</Typography>
            </Details>
         </AvatarBox>
         <Typography variant='body'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            assumenda beatae ipsum, earum dolor aperiam!
         </Typography>
      </Wrapper>
   );
};

export default Client;
