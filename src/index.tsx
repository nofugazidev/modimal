import {createBrowserRouter} from 'react-router-dom'
import RootLayout from '@/layout/root-layout';
import Home from './pages/home';
import Register from './pages/auth/register';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: "register",
        element: <Register />
      }
    ]
  },
]);