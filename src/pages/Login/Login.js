import { CircularProgress, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleButton, LoginBox, Wrapper } from './login.style';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import Loader from '../../components/custom/Loader/Loader';
import Header from '../../components/Header/Header';

const Login = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

   console.log(user);

   return (
      <>
         <Container>
            <Header />
            <Wrapper>
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
                     <Typography
                        variant='h5'
                        fontWeight={600}
                        textAlign='center'
                     >
                        Login With
                     </Typography>
                     <GoogleButton onClick={() => signInWithGoogle()}>
                        <img
                           src='https://i.ibb.co/VqHDgv7/Group-573.png'
                           alt=''
                        />

                        {loading ? <Loader /> : ' Continue with Google'}
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
            </Wrapper>
         </Container>
      </>
   );
};

export default Login;
