import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from "../page/Root";
import Error from "../page/Error"
import Home from "../page/Home";
import CountryRoot from "../page/country/CountryRoot";
import Countries from "../page/country/Countries";
import CountryDetail from "../page/country/CountryDetail";


const Router = () => {
    const router = createBrowserRouter([
      {
          path: "/", element: <Root />, errorElement: <Error />,
          children: [
              { index: true, element: <Home />},
              { path: "countries", element: <CountryRoot />, children: [
                {index: true, element: <Countries />},
                { path: ":countryId" , element: <CountryDetail />}
              ]},
          ],  
  
      }
    ]);
  
    return ( 
      <RouterProvider router={router} />
    )
  }
  
  export default Router