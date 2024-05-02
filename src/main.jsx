import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Routes/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Context from './Context/Context';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import CheckOut from './CheckOut/CheckOut';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import MyOrder from './Components/MyOrder';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/order",
        element:<MyOrder></MyOrder>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path: "serviceDetails/:id",
        loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`),
        element:<PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>
      },
      {
        path:"/checkOut/:id",
        loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`),
        element:<PrivetRoute><CheckOut></CheckOut></PrivetRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <Context>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </Context>
  </div>
)
