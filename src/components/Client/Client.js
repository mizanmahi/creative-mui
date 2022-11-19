import { Avatar, Typography, Rating } from '@mui/material';
import React from 'react';
import { AvatarBox, Details, Wrapper } from './client.style';

const Client = () => {
   return (
      <Wrapper>
         <AvatarBox sx={{mb: 3}}>
            <Avatar
               alt='Remy Sharp'
               src='https://i.ibb.co/dc4G3dM/Ellipse-90.png'
               sx={{ mr: 2, width: 80, height: 80 }}
            />
            <Details>
               <Typography variant='h6' sx={{
                  fontWeight: 600,
               }}>John Doe</Typography>
               <Typography variant='body2'>CEO, XYZ Inc.</Typography>
               <Rating sx={{
                  color: 'primary.yellow',
                  fontSize: '1rem',
                  mt: 1
               }} name="read-only" value={4} readOnly />
            </Details>
         </AvatarBox>
         <Typography variant='body' sx={{
            color: '#707070'
         }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            assumenda beatae ipsum, earum dolor aperiam!
         </Typography>
      </Wrapper>
   );
};

export default Client;
