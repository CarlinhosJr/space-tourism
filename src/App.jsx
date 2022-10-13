import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'

import Home from './Pages/home/Inicio'

import Destination from "./Pages/destination/Destination"
import Mars from "./Pages/destination/planets/Marte"
import Europa from "./Pages/destination/planets/Europe"
import Titan from "./Pages/destination/planets/Ttan"
import Moon from './Pages/destination/planets/Moon'

import Crew from "./pages/crew/Crew"
import DouglasHurley from "./Pages/crew/Douglas"
import MarkShuttleworth from "./Pages/crew/MarkShuttleworth"
import VitorGlover from "./Pages/crew/Victor"
import AnoushehAnsari from "./Pages/crew/AnoushehAnsari"

import Technology from "./Pages/technology/Tecnologia"
import LaunchVehicle from './Pages/technology/LaunchVehicle'
import SpaceCapsule from './Pages/technology/SpaceCapsule'
import Spaceport from './Pages/technology/Spaceport'
import Header from './components/Header'


function App() {

  return (
 
      <Router>
        <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              
              <Route path="/destination" element={<Destination/>}>
                <Route index element={<Moon/>} />
                <Route path="mars" element={<Mars/>} />
                <Route path="europa" element={<Europa/>}/>
                <Route path="titan" element={<Titan/>} />
                <Route path="moon" element={<Moon/>} />
              </Route>

              <Route path="/crew" element={<Crew/>}>
                <Route index element={<DouglasHurley/>}/>
                <Route path="douglasHurley" element={<DouglasHurley/>}/>
                <Route path="markShuttleworth" element={<MarkShuttleworth/>}/>
                <Route path="vitorGlover" element={<VitorGlover/>}/>
                <Route path="anoushehAnsari" element={<AnoushehAnsari/>}/>
              </Route>

              <Route path="/technology" element={<Technology/>}>
                <Route index element={<LaunchVehicle/>}/>
                <Route path="launchVehicle" element={<LaunchVehicle/>}/>
                <Route path="Spaceport" element={<SpaceCapsule/>}/>
                <Route path="spaceCapsule" element={<Spaceport/>}/>
              </Route>
          </Routes>
    </Router>
  )
}

export default App
