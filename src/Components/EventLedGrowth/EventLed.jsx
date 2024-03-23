
import { useState } from 'react'
import Card from './Components/Card'
import Testinomial from './Components/Testimonial'
import Session from './Components/Session'
import Video from './Components/Video'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import Eventledpart1 from './Components/Eventledpart1'

function App() {

  return (
    <>
    <Eventledpart1/>
      <Card />
      <Testinomial />
      <Session />
      <Video />
      <FAQ />
      {/* <Footer /> */}
    </>
  )
}

export default App