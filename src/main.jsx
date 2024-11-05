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
import DarkModeContextProvider from './context/DarkMode.jsx';
import { TotalPriceProvider } from './context/TotalPriceContext.jsx';
import SimpleForm from './components/Pages/form.jsx';


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
  {
    path: "/product/:id",
    element: <ProductDetailPage />
  },
  {
    path: "/form",
    element: <SimpleForm />
  },



]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Provider store={store} >

      {/* <RouterProvider router={router} /> */}

      <DarkModeContextProvider>

        {/* <RouterProvider router={router} /> */}
        <TotalPriceProvider>

          <RouterProvider router={router} />
          
        </TotalPriceProvider>
        
      </DarkModeContextProvider>

    </Provider>
  </StrictMode>,
)
