import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';


import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <AboutMe />,
    },
    {
      path: 'portfolio',
      element: <Portfolio />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
    {
      path: 'resume',
      element: <Resume />,
    },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
