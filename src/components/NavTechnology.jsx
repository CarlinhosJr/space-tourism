import { NavLink } from "react-router-dom"

const NavTechnology = () =>{


    return(
        <nav>
            <ul className="lg:flex lg:flex-col flex justify-center gap-8 lg:mb-0 mb-8">
                <li>
                    <NavLink to="/technology/launchVehicle" className={({isActive}) => isActive ? 'bg-white text-black rounded-full lg:py-8 md:py-6 py-5 ' : 'text-white'}>
                        <button  className={`lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14 lg:text-[32px] md:text-2xl text-xl font-belf border-2 border-white border-opacity-[0.17] rounded-full`}>1</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/technology/Spaceport" className={({isActive}) => isActive ? 'bg-white text-black rounded-full lg:py-8 md:py-6 py-5 ' : 'text-white'}>
                        <button className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14 lg:text-[32px] md:text-2xl text-xl font-belf border-2 border-white border-opacity-[0.17] rounded-full">2</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/technology/spaceCapsule" className={({isActive}) => isActive ? 'bg-white text-black rounded-full lg:py-8 md:py-6 py-5 ' : 'text-white'}>
                        <button className="lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14 lg:text-[32px] md:text-2xl text-xl font-belf border-2 border-white border-opacity-[0.17] rounded-full">3</button>
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default NavTechnology