import { NavLink } from "react-router-dom"

const NavCrew = () =>{
    return(
        <nav className="md:flex justify-center">
            <ul className="flex gap-6">
                <li>
                    <NavLink to="/crew/douglasHurley" style={{background:'white', borderRadius:'100%'}}  className={({isActive}) => isActive ? '' : ''}>
                        <button className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full"></button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/crew/markShuttleworth" className={({isActive}) => isActive ? '' : ''}>
                        <button className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full"></button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/crew/vitorGlover" className={({isActive}) => isActive ? '' : ''}>
                        <button className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full"></button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/crew/anoushehAnsari" className={({isActive}) => isActive ? '' : ''}>
                        <button className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full"></button>
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default NavCrew