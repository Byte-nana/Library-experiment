import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/Home.jsx';
import Videos from './pages/Videos.jsx';
import VideoDetails from './pages/VideoDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import Root from './pages/Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/videos',
        element: <Videos />,
      },
      { path: '/videos/:videoId', element: <VideoDetails /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
