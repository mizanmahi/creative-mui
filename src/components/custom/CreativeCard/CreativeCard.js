import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const CreativeCard = () => {
   return (
      <Card
         sx={{
            maxWidth: 350,
            p: 2,
            borderRadius: '10px',
            border: '1px solid #C7C7C7',
            filter: 'drop-shadow(0px 4px 80px rgba(0, 0, 0, 0.1))',
            boxShadow: 'none',
         }}
      >
         <CardMedia
            component='img'
            alt='green iguana'
            height='140'
            image='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
            style={{
               borderRadius: '10px',
               height: '170px',
            }}
         />
         <CardContent
            sx={{
               p: 0,
               pt: 2,

               '&:last-child': {
                  pb: 0,
               },
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
            }}
         >
            <Box>
               <Typography
                  gutterBottom
                  variant='body'
                  component='div'
                  sx={{
                     color: '#676767',
                  }}
               >
                  Web Design
               </Typography>
               <Typography variant='h6' color='primary.main'>
                  Web Design Research
               </Typography>
            </Box>
            <IconButton
               sx={{
                  border: (theme) => `2px solid ${theme.palette.primary.main}`,
                  width: '30px',
                  height: '30px',
                  '& > svg': {
                     color: 'primary.main',
                  },
               }}
            >
               <AddIcon />
            </IconButton>
         </CardContent>
      </Card>
   );
};

export default CreativeCard;
