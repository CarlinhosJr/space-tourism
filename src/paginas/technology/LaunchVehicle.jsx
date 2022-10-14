import React from 'react';
import ImgLaunchVehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import ImgLaunchVehicleLand from "../../assets/technology/image-launch-vehicle-landscape.jpg"
import NavTechnology from '../../components/NavTechnology';

const LaunchVehicle = () =>{

    return(
        <div className="lg:flex lg:flex-row lg:justify-evenly lg:text-start flex flex-col  text-center">
            <div className="lg:mt-[280px] md:mt-48 mt-36">
                <p className="lg:tracking-[4px] lg:text-[28px] lg:ml-0 md:ml-[55px] md:text-xl md:text-start md:tracking-[3px] text-center tracking-[2.7px] text-white"><span className="text-gray-500 font-bold mr-7">03</span>SPACE LAUNCH 101</p>

                <div className="lg:hidden md:mt-12 md:flex md:justify-center mt-8">
                    <img src={ImgLaunchVehicleLand} alt="" className="md:h-[310px] w-full h-[170px]" />
                </div>

                <div className="lg:flex lg:gap-20 lg:mt-[154px] md:mt-20 mt-14">
                    <NavTechnology/>
                    <div className="flex flex-col">
                        <p className="text-white text-opacity-50 tracking-[2.7px]">THE TERMINOLOGY…</p>
                        <p className="lg:text-[56px] md:text-[40px] text-3xl text-white font-belf mt-[28px]">LAUNCH VEHICLE</p>
                        <p className="text-lg text-[#D0D6F9] mt-8">
                            A launch vehicle or carrier rocket is a rocket-propelled <br />
                            vehicle used to carry a payload from Earth's surface to <br />
                            space, usually to Earth orbit or beyond. Our WEB-X <br />
                            carrier rocket is the most powerful in operation. Standing <br />
                            150 metres tall, it's quite an awe-inspiring sight on <br />
                            the launch pad!
                        </p>
                    </div>
                </div>

                <div className=" lg:mt-[120px] md:mt-10 md:flex md:justify-center lg:flex lg:justify-start hidden">
                    
                </div>
                
            </div>
            <div className="lg:mt-[250px] lg:flex md:mt-12 hidden">
                <img src={ImgLaunchVehicle} alt="" className="rounded-lg w-[500px]" />
                {/* <div className="border-b border-[#383B4B] w-[700px]"></div> */}
            </div>
        </div>
    )
    
}

export default LaunchVehicle