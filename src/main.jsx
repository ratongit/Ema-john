import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop.jsx';
import Home from './Home/Home.jsx';
import Order from './Component/Order/Order.jsx';
import Inventory from './Component/Inventory/Inventory.jsx';
import LogIn from './Component/LogIn/LogIn.jsx';
import cardProductLoder from './cardProductLoder/cardProductLoder.js';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>,

    },
    {
      path:'/order',
      element: <Order></Order>,
      loader: cardProductLoder
    },
    {
      path: "inventory",
      element:<Inventory></Inventory>
    },
    {
      path: 'login',
      element: <LogIn></LogIn>
    }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
