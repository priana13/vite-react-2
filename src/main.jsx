import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import "./index.css";
import LoginPage from './components/Pages/Login.jsx';
import RegisterPage from './components/Pages/Register.jsx';
import ErrorPage from './components/Pages/404.jsx';
import ProductPage from './components/Pages/products.jsx';
import ProductDetailPage from './components/Pages/productDetail.jsx';
import { Provider } from 'react-redux';
import store from "./redux/store.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage />,
    errorElement: <ErrorPage />
    
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductPage />
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />
  },



]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Provider store={store} >

      <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)
