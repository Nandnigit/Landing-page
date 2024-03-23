import { useState } from 'react'
import Video from './Components/Title-Video/Video'
import Learning from './Components/Learning/Learning'
import Testimonial from './Components/Testimonial/Testimonial'
import Craft from './Components/Craft-section/Craft'
import DataLedpart2 from './Components/DataLedpart2'
import DataLedpart3 from './Components/DataLedpart3'
import Datavideopart from './Components/Datavideopart'
import DataLedpart4 from './Components/DataLedpart4'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import Grid from './Components/Grid-section/Grid-section'

function App() {
  

  return (
    <>
    <Video />
    <Learning />
    <Testimonial />
    <Craft />
    <Grid />
    <DataLedpart2/>
    <DataLedpart3/>
    <Datavideopart/>
    <DataLedpart4/>
    <FAQ/>
    {/* <Footer/>  */}
    </>
  )
}

export default App
