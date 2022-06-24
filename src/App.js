import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Review from './pages/Dashboard/Review/Review';
import './App.css'

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
   {
      component: Dashboard,
      path: '/dashboard',
      protected: true,
      title: 'My Dashboard',
      nested_routes: [
         {
            component: Review,
            path: 'review',
            protected: true,
            title: 'Dashboard | Review',
         },
      ],
   },
];

function App() {
   return (
      <ThemeProvider theme={theme}>
         <div className='App'>
            <Routes>
               {routes.map(
                  ({ path, component: Component, nested_routes }, key) => {
                     if (nested_routes) {
                        return (
                           <Route path={path} element={<Component />} key={key}>
                              {nested_routes.map(
                                 ({ path, component: Component }, key) => (
                                    <Route
                                       path={path}
                                       key={key}
                                       element={<Component />}
                                    />
                                 )
                              )}
                           </Route>
                        );
                     }
                     return (
                        <Route path={path} element={<Component />} key={key} />
                     );
                  }
               )}
            </Routes>
         </div>
      </ThemeProvider>
   );
}

export default App;
