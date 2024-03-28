import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Threepillors from './Components/ThreePillors/Threepillors.jsx'
import Community2 from './Components/Community2-section/components/Community2.jsx'
import Home from './Home'
import AnnualRetreatSection from './Components/annual-retreat-section/components/AnnualRetreatSection.jsx'
import Threeoutcomes from './Components/ThreeOutcomes/Threeoutcomes.jsx'
import DataLed from './Components/DataLedGrowth/DataLed.jsx'
// import Partnership from './Components/PartnershipLEDGrowth/PartnershipLEDGrowth/PartnershipLed.jsx'   Partner ship fileis not there
import EventLed from './Components/EventLedGrowth/EventLed.jsx'
import Newsletter from './Components/NewsLetter-master/Newsletter.jsx'
import Framework from './Components/framwork-task (2)/Framework.jsx'
import Elevate from './Components/growthx-elevate-main/Elevate.jsx'
import Forteam from './Components/for team/Forteam.jsx'
// import Templatestask from './Components/temp/src/Templatestask.jsx'     file is not there

import PrivateRoute from './Components/Auth/PrivateRoute.jsx'
import Login from './Components/login/login.jsx'
import DashBoard from './Components/dashboard/DashBoard';
import Register from './Components/register/Register.jsx'
import OpenRoute from './Components/Auth/OpenRoute.jsx'
import Member from './Components/Community2-section/components/Member.jsx'
import PhotoSlider from './Components/Community2-section/components/Photoslider.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children : [
      { path: "/",
        element: <Home/>
      },
      {
        path: "learning",
        element: <Threepillors/>
      },
      {
        path: "Community",
        element: <><Member /><Community2/><PhotoSlider /></>
      },
      {
        path: "Annual Retreat Section",
        element: <AnnualRetreatSection/>
      },
      {
        path: "Outcomes",
        element: <Threeoutcomes/>
      },
      {
        path: "DataLedGrowth",
        element: <DataLed />
      },
      // {
      //   path: "PartnershipLedGrowth",
      //   element: <Partnership />
      // },
      {
        path: "EventLedGrowth",
        element: <EventLed />
      },
      {
        path: "BrandLedGrowth",
        element: <EventLed />
      },
      {
        path: "Newsletter",
        element: <Newsletter/>
      },
      {
        path: "Framework",
        element: <Framework/>
      },
      {
        path: "Youtube",
        element: <Home/>
      },
      {
        path: "Elevate",
        element: <Elevate/>
      },
      {
        path: "for-teams",
        element: <Forteam/>
      },
      // {
      //   path: "Template",
      //   element: <Templatestask/>
      // },
      {
        path:'register',
        element: <OpenRoute><Register /></OpenRoute>
      },
      {
        path:'login',
        element: <OpenRoute><Login /></OpenRoute> 
      },
      {
        path:'dashboard',
        element: <PrivateRoute><DashBoard /></PrivateRoute>
      }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
