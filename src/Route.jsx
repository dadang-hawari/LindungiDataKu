import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FileEncryption from './pages/FileEncryption';
import About from './pages/About';
import TextEncryption from './pages/TextEncryption';
import Demo from './pages/Demo';

export default function Route() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <FileEncryption />,
    },
    {
      path: `/text-encrypt`,
      element: <TextEncryption />,
    },
    {
      path: `/tentang`,
      element: <About />,
    },
    {
      path: `/demo`,
      element: <Demo />,
    },
  ]);
  return <RouterProvider router={router} />;
}
