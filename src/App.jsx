import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'

import Home from './pages/home/Home.jsx'

import Destination from './pages/destination/Destination.jsx'
import Mars from './pages/destination/planets/Marte.jsx'
import Europa from './pages/destination/planets/Europe.jsx'
import Titan from './pages/destination/planets/Ttan.jsx'
import Moon from './pages/destination/planets/Moon.jsx'

import Crew from './pages/crew/Crew.jsx'
import DouglasHurley from './pages/crew/Douglas.jsx'
import MarkShuttleworth from './pages/crew/MarkShuttleworth.jsx'
import VitorGlover from './pages/crew/Victor.jsx'
import AnoushehAnsari from './pages/crew/AnoushehAnsari.jsx'

import Technology from './pages/technology/Tecnologia.jsx'
import LaunchVehicle from './pages/technology/LaunchVehicle.jsx'
import SpaceCapsule from './pages/technology/SpaceCapsule.jsx'
import Spaceport from './pages/technology/Spaceport.jsx'
import Header from './components/Header.jsx'


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
