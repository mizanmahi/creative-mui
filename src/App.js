import { Button, createTheme, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Review from './pages/Dashboard/Review/Review';
import './App.css';
import Order from './pages/Dashboard/Order/Order';
import { useState } from 'react';
import ServiceList from './pages/Dashboard/ServiceList/ServiceList';

const routes = [
   {
      component: Home,
      path: '/',
      protected: false,
      title: 'Home',
   },
   {
      component: Login,
      path: '/login',
      protected: false,
      title: 'Login',
   },
];

function App() {
   return (
      // <ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
         <div className='App'>
            <Routes>
               {routes.map(({ path, component: Component }, key) => {
                  return (
                     <Route path={path} element={<Component />} key={key} />
                  );
               })}
               <Route path='/dashboard' element={<Dashboard />}>
                  <Route path='order' element={<Order />} />
                  <Route path='service-list' element={<ServiceList />} />
                  <Route path='review' element={<Review />} />
               </Route>
            </Routes>
         </div>
      </ThemeProvider>
      // </ThemeProvider>
   );
}

export default App;
