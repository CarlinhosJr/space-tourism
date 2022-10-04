import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/shared/logo.svg"
import ImgOpen from "../assets/shared/icon-open.svg"
import ImgClose from "../assets/shared/icon-close.svg"

const Header = () =>{
    const [open, setOpen] = useState(false)

  return (
    <header className="">
        <div className="lg:flex lg:justify-around lg:items-center md:flex md:justify-between md:items-center">
            <div className="md:mt-10 md:ml-10 ml-10 mt-8 inline-block">
                <Link to="/"><img src={Logo} alt="" className=""/></Link> 
            </div>
            <div 
                onClick={()=>setOpen(!open)} 
                className={`absolute right-8 top-11 cursor-pointer md:hidden z-10 `}>
                <img src={open ? ImgClose : ImgOpen } alt=""/>       
            </div>
            <nav className="">
                <ul className={`lg:w-[800px] lg:h-[96px] lg:gap-12 md:w-[470px] md:h-24 md:mt-10 md:flex md:justify-center md:items-center md:gap-4 md:pl-0 md:pt-0 md:static md:backdrop-blur-lg md:rounded w-3/4 h-screen -mt-24 absolute right-0 pl-8 pt-[118px] bg-menu backdrop-blur-xl transition-all duration-500 ease-in rounded-md  text-white ${open ? '':'hidden'}`}>
                    <li className="md:mb-0 mb-8 text-xl">
                        <Link to="/"><span className="md:invisible lg:visible lg:mr-0 mr-2 font-bold">00</span> HOME</Link>
                    </li>
                    <li className="md:mb-0 mb-8 text-xl">
                        <Link to="/destination/moon"><span className="md:invisible lg:visible lg:mr-0 mr-2 font-bold">01</span> DESTINATION</Link>
                    </li>
                    <li className="md:mb-0 mb-8 text-xl">
                        <Link to="/crew/douglas"><span className="md:invisible lg:visible lg:mr-0 mr-2 font-bold">02</span> CREW</Link>
                    </li>
                    <li className="md:mb-0 mb-8 text-xl">
                        <Link to="/technology"><span className="md:invisible lg:visible lg:mr-0 mr-2 font-bold">03</span> TECHNOLOGY</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    </header>
    
  )
}

export default Header;