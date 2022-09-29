import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const Crew = () =>{
  return (
    <div className="lg:bg-crew-desktop md:bg-crew-tablet bg-crew-mobile min-h-screen bg-cover bg-no-repeat"> 
        <Header/>
    </div>
  );
}

export default Crew;