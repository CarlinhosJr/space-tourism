import React from 'react';
import NavCrew from '../../components/NavCrew'
import ImgAnousheh from '../../assets/crew/img-anousheh.png'

const AnoushehAnsari = () =>{
    return (
        <div className="lg:flex lg:flex-row lg:justify-evenly flex flex-col lg:text-start text-center">
            <div className="lg:flex lg:flex-col lg:mt-[280px] md:mt-48 mt-36">
                <p className="lg:tracking-[4px] lg:text-[28px] lg:ml-0 md:ml-[55px] md:text-xl md:text-start md:tracking-[3px] text-center tracking-[2.7px] text-white"><span className="text-gray-500 font-bold mr-7">02</span>MEET YOUR CREW</p>
                <div className="md:hidden flex justify-center mt-10">
                    <img src={ImgAnousheh} alt="" className="w-[270px]" />
                </div>
                <div className="border-b border-[#5e6064] w-full md:hidden"></div>

                <div className="md:hidden flex justify-center mt-10">
                    <NavCrew/>
                </div>
               
                <div className="lg:mt-[154px] md:mt-20 mt-14">
                    <p className="lg:text-[32px] md:text-2xl text-white text-opacity-50 font-belf">FLIGHT ENGINEER</p>
                    <p className="lg:text-[56px] md:text-[40px] text-3xl text-white font-belf mt-[15px]">ANOUSHEH ANSARI</p>
                    <p className="text-lg text-[#D0D6F9] mt-[27px]">
                        Anousheh Ansari is an Iranian American engineer <br /> and co-founder of Prodea Systems. Ansari was the <br /> 
                        fourth self-funded space tourist, the first <br />
                        self-funded woman to fly to the ISS, and the first <br />
                        Iranian in space.
                    </p>
                </div>

                <div className="lg:mt-[120px] md:mt-10 md:flex md:justify-center lg:flex lg:justify-start hidden">
                    <NavCrew/>
                </div>
                
            </div>
            <div className="lg:flex lg:flex-col lg:mt-[250px] md:mt-12 md:flex md:justify-center hidden">
                <img src={ImgAnousheh} alt="" className="lg:w-[600px] md:w-[400px] border-b-2 border-[#383B4B]" />
            </div>
           
            
        </div>
    )
}

export default AnoushehAnsari