import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Input, MyTextareaAutosize, Wrapper } from './newsLetter.stye';

const NewsLetter = () => {
   return (
      <Wrapper>
         <Container>
            <Box
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: ['column', 'column', 'row'],
               }}
            >
               <Box sx={{ flex: 1, mr: 8 }}>
                  <Typography
                     sx={{ width: ['100%', '100%', '70%'], mb: 5 }}
                     variant='h4'
                     fontWeight={600}
                  >
                     Let us handle your project, professionally.
                  </Typography>
                  <Typography
                     sx={{ width: ['100%', '60%', '70%'], display: 'block' }}
                     variant='body1'
                     color='rgba(0,0,0,0.7)'
                  >
                     With well written codes, we build amazing apps for all
                     platforms, mobile and web apps in general.
                  </Typography>
               </Box>
               {/* ========= form start ========= */}
               <Box sx={{ flex: 1, mt: { xs: 5, md: 0 } }}>
                  <Box
                     component='form'
                     sx={{
                        width: '100%',
                     }}
                  >
                     <Input type='text' placeholder='Your email address' />
                     <Input
                        type='text'
                        placeholder='Your name / company’s name'
                     />
                     <MyTextareaAutosize
                        aria-label='minimum height'
                        minRows={8}
                        maxRows={9}
                        placeholder='Your Message'
                     />
                     <Button
                        sx={{
                           mt: '1.5rem',
                           width: {
                              xs: '100%',
                              md: 'auto',
                           },
                           bgcolor: 'primary.green',
                           '&:hover': {
                              bgcolor: 'primary.green',
                           },
                        }}
                     >
                        Send
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Container>
      </Wrapper>
   );
};

export default NewsLetter;
