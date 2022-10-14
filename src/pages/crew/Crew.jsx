import React, { useState } from 'react';
import {Outlet } from 'react-router-dom';


const Crew = () =>{
  
  return (
    <div className="lg:bg-crew-desktop md:bg-crew-tablet bg-crew-mobile min-h-screen bg-cover bg-no-repeat"> 
        <Outlet/>
    </div>
  )
}

export default Crew;