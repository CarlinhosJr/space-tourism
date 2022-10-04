import { Link } from "react-router-dom"

const NavDestination = () =>{
    return(
        <nav>
            <ul className="md:flex md:gap-9 flex justify-center gap-[26px] text-[#D0D6F9] text-xl tracking-[2.7px]">
                <li>
                    <Link to="/destination/moon">MOON</Link>
                </li>
                <li>
                    <Link to="/destination/mars">MARS</Link>
                </li>
                <li>
                    <Link to="/destination/europa">EUROPA</Link>
                </li>
                <li>
                    <Link to="/destination/titan">TITAN</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavDestination