import React from 'react';
import NavCrew from '../../components/NavCrew'
import ImgVictor from '../../assets/crew/img-victor.png'

const VitorGlover = () =>{
    return (
        <div className="lg:flex lg:flex-row lg:justify-evenly flex flex-col lg:text-start text-center">
            <div className="lg:flex lg:flex-col lg:mt-[280px] md:mt-48 mt-36">
                <p className="lg:tracking-[4px] lg:text-[28px] lg:ml-0 md:ml-[55px] md:text-xl md:text-start md:tracking-[3px] text-center tracking-[2.7px] text-white"><span className="text-gray-500 font-bold mr-7">02</span>MEET YOUR CREW</p>
                <div className="md:hidden flex justify-center mt-10">
                    <img src={ImgVictor} alt="" className="w-[250px]" />
                </div>
                <div className="border-b border-[#5e6064] w-full md:hidden"></div>

                <div className="md:hidden flex justify-center mt-10">
                    <NavCrew/>
                </div>
            
                <div className="lg:mt-[154px] md:mt-20 mt-14">
                    <p className="lg:text-[32px] md:text-2xl text-white text-opacity-50 font-belf">PILOT</p>
                    <p className="lg:text-[56px] md:text-[40px] text-3xl text-white font-belf mt-[15px]">VICTOR GLOVER</p>
                    <p className="text-lg text-[#D0D6F9] mt-[27px]">
                        Pilot on the first operational flight of the SpaceX Crew Dragon to the <br /> 
                        International Space Station. Glover is a commander in the U.S. Navy <br /> 
                        where he pilots an F/A-18.He was a crew member of Expedition 64, <br /> and served as a station systems flight engineer. 
                    </p>
                </div>

                <div className="lg:mt-[120px] md:mt-10 md:flex md:justify-center lg:flex lg:justify-start hidden">
                    <NavCrew/>
                </div>
                
            </div>
        <div className="lg:mt-[224px] md:mt-12 md:flex md:justify-center hidden">
            <img src={ImgVictor} alt="" className="lg:w-[554.39px] md:w-[370px] border-b-2 border-[#383B4B]" />
            {/* <div className="border-b border-[#383B4B] w-[700px]"></div> */}
        </div>
    </div>
    )
}

export default VitorGlover