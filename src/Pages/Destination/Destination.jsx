import React from 'react';
import { Outlet } from 'react-router-dom';



const Destination = () =>{
  return (
    <div className="lg:bg-destination-desktop md:bg-destination-tablet bg-destination-mobile min-h-screen bg-cover bg-no-repeat"> 
      
      <Outlet/>
      
    </div>
  );
}

export default Destination;