import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "../../Pages/Home/Home"
import Destination from "../../Pages/Destination/Destination"
import Crew from "../../Pages/Crew/Crew"
import Technology from "../../Pages/Technology/Technology"

const MyRoutes = () => {
   return(

    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Destination" element={<Destination/>} />
            <Route path="/Crew" element={<Crew/>} />
            <Route path="/Technology" element={<Technology/>} />
        </Routes>
    </Router>

   )
}

export default MyRoutes;