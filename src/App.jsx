import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'
import Home from "./Pages/home/Home"
import Destination from "./pages/destination/Destination"
import Mars from "./Pages/destination/planets/Marte"
import Europa from "./Pages/destination/planets/Europe"
import Titan from "./Pages/destination/planets/Ttan"
import Moon from './Pages/destination/planets/Lua'
import Crew from "./pages/crew/Crew"
import DouglasHurley from "./pages/crew/DouglasHurley"
import MarkShuttleworth from "./pages/crew/MarkShuttleworth"
import VitorGlover from "./pages/crew/VictorGlover"
import AnoushehAnsari from "./Pages/crew/AnoushehAnsari"

import Technology from "./pages/technology/Technology"


function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            
            <Route path="destination" element={<Destination/>}>
              <Route path="moon" element={<Moon/>} />
              <Route path="mars" element={<Mars/>} />
              <Route path="europa" element={<Europa/>}/>
              <Route path="titan" element={<Titan/>} />
            </Route>

            <Route path="crew" element={<Crew/>}>
              <Route path="douglasHurley" element={<DouglasHurley/>}/>
              <Route path="markShuttleworth" element={<MarkShuttleworth/>}/>
              <Route path="vitorGlover" element={<VitorGlover/>}/>
              <Route path="anoushehAnsari" element={<AnoushehAnsari/>}/>
            </Route>

            <Route path="technology" element={<Technology/>}>
              <Route path="LaunchVehicle" element={<DouglasHurley/>}/>
              <Route path="Spaceport" element={<MarkShuttleworth/>}/>
              <Route path="SpaceCapsule" element={<VitorGlover/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default App
