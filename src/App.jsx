import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'

import Home from './pages/home/Inicio'

import Destination from './pages/destination/Destination'
import Mars from './pages/destination/planets/Marte'
import Europa from './pages/destination/planets/Europe'
import Titan from './pages/destination/planets/Ttan'
import Moon from './pages/destination/planets/Moon'

import Crew from './pages/crew/Crew'
import DouglasHurley from './pages/crew/Douglas'
import MarkShuttleworth from './pages/crew/MarkShuttleworth'
import VitorGlover from './pages/crew/Victor'
import AnoushehAnsari from './pages/crew/AnoushehAnsari'

import Technology from './pages/technology/Tecnologia'
import LaunchVehicle from './pages/technology/LaunchVehicle'
import SpaceCapsule from './pages/technology/SpaceCapsule'
import Spaceport from './pages/technology/Spaceport'
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
