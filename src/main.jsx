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
import Partnership from './Components/PartnershipLEDGrowth/PartnershipLEDGrowth/PartnershipLed.jsx'
import EventLed from './Components/EventLedGrowth/EventLed.jsx'
import Newsletter from './Components/NewsLetter-master/src/Newsletter.jsx'
import Framework from './Components/framwork-task (2)/framwork-task/framwork/src/Framework.jsx'
import Elevate from './Components/growthx-elevate-main/growthx-elevate-main/src/Elevate.jsx'
import Forteam from './Components/for team/src/Forteam.jsx'
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
      }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
