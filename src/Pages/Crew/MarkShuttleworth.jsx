import ImgMark from '../../assets/crew/img-mark.png'

const MarkShuttleworth = () =>{
    
    return (
        <div className="flex justify-around">
        <div className="mt-28">
            <p className="lg:ml-0 lg:tracking-[4px] lg:text-[28px] md:ml-10 md:text-xl md:text-start md:tracking-[3px] text-center tracking-[2.7px] text-white"><span className="text-gray-500 font-bold mr-7">02</span>MEET YOUR CREW</p>
            <div className="mt-[154px]">
              <p className="text-[32px] text-white text-opacity-50 font-belf">COMMANDER</p>
              <p className="text-[56px] text-white font-belf mt-[15px]">DOUGLAS HURLEY</p>
              <p className="text-lg text-[#D0D6F9] mt-[27px] ">
                  Douglas Gerald Hurley is an American engineer, former <br /> 
                  Marine Corps pilot and former NASA astronaut. He <br /> 
                  launched into space for the third time as commander <br />
                  of Crew Dragon Demo-2.
              </p>
            </div>
            <NavCrew/>
        </div>
        <div className="mt-[62px]">
            <img src={ImgMark} alt="" />
        </div>
    </div>
    )
}

export default MarkShuttleworth