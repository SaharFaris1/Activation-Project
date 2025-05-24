import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router";
import React from 'react'
import Home from "../Pages/Home";
import Nav from '../component/Nav';
import Footer from "../component/Footer";
import About from "../Pages/About";
import Search from "../Pages/Search";
import Support from "../Pages/Support";


function Layout() {
    return (
      <>
          <Nav></Nav>
        <Outlet />
<Footer/>
 
      </>
    );
  }

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
        path: "/home", element: <Home/>
      },
      {
        path: "/about", element: <About/>
      },
      {
        path: "/search", element: <Search/>
      },
      {
        path: "/support", element: <Support/>
      },
      {
        path: "/support", element: <Support/>
      },
     
    ]
    },
  ]);

function Router() {
  return (
    <div>
<RouterProvider router={router}>

</RouterProvider>

    </div>
  )
}



export default Router