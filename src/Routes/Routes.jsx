
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Explore from "../Pages/Explore/Explore";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";
import CreateSurvey from "../Pages/CreateSurvey/CreateSurvey";
import Dashboard from "../Layout/DashBoard/Dashboard";
import MySurvey from "../Layout/DashBoard/MySurvey/MySurvey";
import Charts from "../Layout/DashBoard/Charts/Charts";
import Faq from "../Pages/Home/Faq/Faq";
import AllUsers from "../Layout/DashBoard/AllUsers/AllUsers";
import ProUser from "../Pages/Pro/ProUser";

  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'explore',
          element: <Explore></Explore>
        },
        {
          path: 'checkout/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
        },
        {
          path:'create',
          element:<PrivateRoute><CreateSurvey></CreateSurvey></PrivateRoute>
        }
       
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: 'survey',
          element: <PrivateRoute><MySurvey></MySurvey></PrivateRoute>
        },
        {
          path:'explore',
          element:<Explore></Explore>

        },
        {
          path:'charts',
          element:<Charts></Charts>
        },
        {
          path:'create',
          element: <CreateSurvey></CreateSurvey>
        },
        {
          path:'userHome',
          element:<Faq></Faq>
        },
        {
          path:'proUser',
          element:<ProUser></ProUser>
        },
        //admin routes
        {
          path:'users',
          element:<AllUsers></AllUsers>
        }
       
      ]
    }
  ]);

