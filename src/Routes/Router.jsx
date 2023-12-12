import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Blog from "../pages/Blog/Blog";
import Contact from "../components/Contact/Contact";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: 
      [
        {
        path:'/',
        element: <Home/>
        },
        {
        path:'/blog',
        element: <Blog/>
        },
        {
        path:'/contact',
        element: <Contact/>
        }
      ]
    },
  ]);

  export default router;