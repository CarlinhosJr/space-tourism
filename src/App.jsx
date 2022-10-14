import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'

import Home from './paginas/home/Home'

import Destination from './paginas/destination/Destination'
import Mars from './paginas/destination/Marte'
import Europa from './paginas/destination/Europe'
import Titan from './paginas/destination/Ttan'
import Moon from './paginas/destination/Moon'

import Crew from './paginas/crew/Crew'
import DouglasHurley from './paginas/crew/Douglas'
import MarkShuttleworth from './paginas/crew/MarkShuttleworth'
import VitorGlover from './paginas/crew/Victor'
import AnoushehAnsari from './paginas/crew/AnoushehAnsari'

import Technology from './paginas/technology/Tecnologia'
import LaunchVehicle from './paginas/technology/LaunchVehicle'
import SpaceCapsule from './paginas/technology/SpaceCapsule'
import Spaceport from './paginas/technology/Spaceport'
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
