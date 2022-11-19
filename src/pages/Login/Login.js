import {
   Box,
   CircularProgress,
   Container,
   Stack,
   Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleButton, LoginBox, Wrapper } from './login.style';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import Loader from '../../components/custom/Loader/Loader';

const Login = () => {
   const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

   console.log(user);

   return (
      <Container>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               height: 'calc(100vh - 164px)',
               rowGap: '5rem',
            }}
         >
            <img
               src='https://i.ibb.co/JsvBDwD/logo.png'
               alt=''
               style={{
                  width: 150,
                  margin: '0 auto',
                  display: 'block',
                  cursor: 'pointer',
               }}
            />
            <LoginBox>
               <Stack rowGap={4} sx={{ width: 1 }}>
                  <Typography variant='h5' fontWeight={600} textAlign='center'>
                     Login With
                  </Typography>
                  <GoogleButton onClick={() => signInWithGoogle()}>
                     <img src='https://i.ibb.co/VqHDgv7/Group-573.png' alt='' />

                     {loading ? (
                        <Loader
                           sx={{
                              '&.MuiCircularProgress-root': {
                                 width: '20px !important',
                                 height: '20px !important',
                                 color: 'primary.green'
                              },
                           }}
                        />
                     ) : (
                        ' Continue with Google'
                     )}
                  </GoogleButton>
                  <Typography
                     fontWeight={500}
                     textAlign='center'
                     sx={{ mt: -3 }}
                  >
                     Don’t have an account?{' '}
                     <Link to='register'>Create an account</Link>
                  </Typography>
               </Stack>
            </LoginBox>
         </Box>
      </Container>
   );
};

export default Login;
