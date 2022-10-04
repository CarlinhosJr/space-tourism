import React from 'react';
import Header from '../../components/Header';



const Home = () =>{
  return (
    <div className="lg:bg-home-desktop md:bg-home-tablet bg-home-mobile min-h-screen bg-cover bg-no-repeat">
      <Header/>
        <div className="lg:flex lg:justify-around lg:items-center lg:mt-[251px] md:text-center text-center md:mt-[106px] mt-40 ">
          <div className="flex flex-col">
            <p className="lg:text-[28px] md:text-xl text-base text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</p>
            <p className="md:text-[150px] text-[80px] font-belf text-white">SPACE</p>
            <p className="md:text-lg text-[16px] text-[#D0D6F9] break-words">
                Let’s face it; if you want to go to space, you might as well<br /> genuinely go to outer space and not hover kind of on the <br /> edge of it. 
                Well sit back, and relax because we’ll give you a <br /> truly out of this world experience!
            </p>
          </div>
          <div className="lg:mt-0 md:mt-[140px] mt-[81px]">
            <button className="lg:w-[274px] lg:h-[274px] md:w-[274px] md:h-[274px] w-[150px] h-[150px] text-[#0B0D17] lg:text-[32px] md:text-[32px] text-xl font-space bg-white rounded-full">EXPLORE</button>
          </div>
        </div>
    </div>
  );
}

export default Home;