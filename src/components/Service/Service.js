import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';

const Service = ({ image }) => {
   return (
      <Card
         sx={{
            maxWidth: 370,
            mx: 'auto',
            borderRadius: '0px',
            background: 'transparent',
            boxShadow: 'none',
            pt: 2,
            cursor: 'pointer',
            '&:hover': {
               boxShadow: '0px 4px 80px rgba(0, 0, 0, 0.1)',
               borderRadius: '8px',
            }
         }}
      >
         <CardMedia
            component='img'
            height='140'
            image={image}
            alt='green iguana'
            sx={{ width: 'auto', mx: 'auto' }}
         />
         <CardContent sx={{ textAlign: 'center' }}>
            <Typography
               gutterBottom
               sx={{ fontSize: '20px', fontWeight: 600 }}
               component='div'
            >
               Web & Mobile design
            </Typography>
            <Typography
               sx={{ fontSize: '16', fontWeight: 300 }}
               color='text.secondary'
            >
               We craft stunning and amazing web UI, using a well drafted UX to
               fit your product.
            </Typography>
         </CardContent>
      </Card>
   );
};

export default Service;
