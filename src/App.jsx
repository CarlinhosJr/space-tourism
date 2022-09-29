import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'
import Home from "./Pages/home/Home"
import Destination from "./Pages/destination/Destination"
import Crew from "./Pages/crew/Crew"
import Technology from "./Pages/technology/Technology"

function App() {

  return (
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

export default App
