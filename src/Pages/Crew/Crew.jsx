import React, { useState } from 'react';
import Header from '../../components/Header';
import {Outlet } from 'react-router-dom';


const Crew = () =>{
  
  return (
    <div className="lg:bg-crew-desktop md:bg-crew-tablet bg-crew-mobile min-h-screen bg-cover bg-no-repeat"> 
        <Header/>
        <Outlet/>
    </div>
  );
}

export default Crew;