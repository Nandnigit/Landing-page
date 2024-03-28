
import './App.css'
import TeamsCard from './Components/TeamsCardSection/TeamsCard.jsx'
import TeamsTopContainer from './Components/Hero-section/Teams-topContainer.jsx'
import Talentsection from './Components/TalentSection/TalentSection.jsx'
import TimelineSection from './Components/TalentTimelineSection/Timeline.jsx'
import BrandSection from './Components/Teams-BrandSection/BrandSection.jsx'
import HireTheBest from './Components/HireBestSection/HireTheBest.jsx'
import HiringSprints from './Components/HiringSprintsSection/HiringSprints.jsx'
import ForTeam from './Components/LastSection/forteamreact.jsx'
function Forteam() {

  return (
   <>
      <TeamsTopContainer />
      <BrandSection />
      <Talentsection/>
      <TimelineSection/>
      <TeamsCard/>
      <HireTheBest />
      <HiringSprints />
      <ForTeam />
   </>
  )
}

export default Forteam
