import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Threepillors from './Components/ThreePillors/Threepillors.jsx'
import Community2 from './Components/Community2-section/components/Community2.jsx'
import Home from './Home'
import AnnualRetreatSection from './Components/annual-retreat-section/components/AnnualRetreatSection.jsx'
import Threeoutcomes from './Components/ThreeOutcomes/Threeoutcomes.jsx'
import DataLed from './Components/DataLedGrowth/DataLed.jsx'
import Partnership from './Components/PartnershipLEDGrowth/PartnershipLed.jsx'
import EventLed from './Components/EventLedGrowth/EventLed.jsx'
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
        element: <Community2/>
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
      {
        path: "PartnershipLedGrowth",
        element: <Partnership />
      },
      {
        path: "EventLedGrowth",
        element: <EventLed />
      },
      
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
