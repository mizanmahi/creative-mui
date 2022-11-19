import { Button, createTheme, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import {
   Routes,
   Route,
   createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Review from './pages/Dashboard/Review/Review';
import './App.css';
import Order from './pages/Dashboard/Order/Order';
import { useState } from 'react';
import ServiceList from './pages/Dashboard/ServiceList/ServiceList';
import Layout from './components/Layout/Layout';
import OurPortfolio from './pages/OurPortfolio/OurPortfolio';
import OurTeam from './pages/OurTeam/OurTeam';

const router = createBrowserRouter([
   {
      element: <Layout />,
      path: '/',
      children: [
         {
            element: <Home />,
            path: '/',
         },
         {
            element: <Login />,
            path: 'login',
         },
         {
            element: <OurPortfolio />,
            path: 'our-portfolio',
         },
         {
            element: <OurTeam />,
            path: 'our-team',
         },
      ],
   },
   {
      element: <Dashboard />,
      path: '/dashboard',
      children: [
         {
            element: <Order />,
            path: 'order',
         },
         {
            element: <Review />,
            path: 'review',
         },
         {
            element: <ServiceList />,
            path: 'service-list',
         },
      ],
   },
]);

function App() {
   return (
      <ThemeProvider theme={theme}>
         <div className='App'>
            <RouterProvider router={router} />
         </div>
      </ThemeProvider>
   );
}

export default App;
