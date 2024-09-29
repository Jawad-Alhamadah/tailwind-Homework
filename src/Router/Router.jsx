import React from 'react'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path:"/about",
        element: <About></About>
    },
    {
        path:"/contact",
        element: <Contact></Contact>
    }

  ]);
function Router() {
  return (

    <RouterProvider router={router} />

  )
}

export default Router
