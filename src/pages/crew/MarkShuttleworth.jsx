import React from 'react';
import NavCrew from '../../components/NavCrew'
import ImgMark from '../../assets/crew/img-mark.png'

const MarkShuttleworth = () =>{
    
    return (
        <div className="lg:flex lg:flex-row lg:justify-evenly flex flex-col lg:text-start text-center">
            <div className="lg:flex lg:flex-col lg:mt-[280px] md:mt-48 mt-36">
                <p className="lg:tracking-[4px] lg:text-[28px] lg:ml-0 md:ml-[55px] md:text-xl md:text-start md:tracking-[3px] text-center tracking-[2.7px] text-white"><span className="text-gray-500 font-bold mr-7">02</span>MEET YOUR CREW</p>
                <div className="md:hidden flex justify-center mt-10">
                    <img src={ImgMark} alt="" className="w-[200px]" />
                </div>
                <div className="border-b border-[#5e6064] w-full md:hidden"></div>

                <div className="md:hidden flex justify-center mt-10">
                    <NavCrew/>
                </div>
               
                <div className="lg:mt-[154px] md:mt-20 mt-14">
                    <p className="lg:text-[32px] md:text-2xl text-white text-opacity-50 font-belf">MISSION SPECIALIST</p>
                    <p className="lg:text-[56px] md:text-[40px] text-3xl text-white font-belf mt-[15px]">MARK SHUTTLEWORTH</p>
                    <p className="text-lg text-[#D0D6F9] mt-[27px]">
                        Mark Richard Shuttleworth is the founder and CEO of Canonical, the <br /> 
                        company behind the Linux-based Ubuntu operating system. Shuttleworth  <br /> 
                        became the first South African to travel to space as a space tourist.
                    </p>
                </div>

                <div className="lg:mt-[150px] md:mt-10 md:flex md:justify-center lg:flex lg:justify-start hidden">
                    <NavCrew/>
                </div>
                
            </div>
            <div className="lg:mt-[300px] md:mt-12 md:flex md:justify-center  hidden">
                <img src={ImgMark} alt="" className="lg:w-[400px] md:w-[330px]  border-b-2 border-[#383B4B]" />
                {/* <div className="border-b border-[#383B4B] w-[700px]"></div> */}
            </div>
        </div>
    )
}

export default MarkShuttleworth