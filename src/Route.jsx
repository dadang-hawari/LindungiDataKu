import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function Route() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Home />,
    },
    {
      path: `/about`,
      element: <About />,
    },
  ]);
  return <RouterProvider router={router} />;
}
