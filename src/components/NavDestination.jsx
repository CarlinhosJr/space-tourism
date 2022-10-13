import { NavLink } from "react-router-dom"

const NavDestination = () =>{

    const navLinkStyles = ({isActive}) =>{
        return{
            borderBottom: isActive ? '3px solid white' : '',
            paddingBottom: isActive ? '1rem' : ''
        }
    }

    return(
        <nav>
            <ul className="md:flex md:gap-9 flex justify-center gap-[26px] text-[#D0D6F9] text-xl tracking-[2.7px]">
                <li>
                    <NavLink to="/destination/moon" style={navLinkStyles}  className=" hover:border-b-[3px] border-white border-opacity-50 pb-4">MOON</NavLink>
                </li>
                <li>
                    <NavLink to="/destination/mars" style={navLinkStyles}  className=" hover:border-b-[3px] border-white border-opacity-50 pb-4">MARS</NavLink>
                </li>
                <li>
                    <NavLink to="/destination/europa" style={navLinkStyles}  className=" hover:border-b-[3px] border-white border-opacity-50 pb-4">EUROPA</NavLink>
                </li>
                <li>
                    <NavLink to="/destination/titan" style={navLinkStyles}  className=" hover:border-b-[3px] border-white border-opacity-50 pb-4">TITAN</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavDestination