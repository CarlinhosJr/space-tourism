import React from 'react';
import {Outlet } from 'react-router-dom';

const Technology = () =>{
  return (
    <div className="lg:bg-tech-desktop md:bg-tech-tablet bg-tech-mobile min-h-screen bg-cover bg-no-repeat"> 
      <Outlet/>
    </div>
  )
}

export default Technology;