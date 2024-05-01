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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/signup",
    element:<SignUp></SignUp>
  }
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
