import { Link } from "react-router-dom"

const NavCrew = () =>{
    return(
        <nav className="md:flex justify-center">
            <ul className="flex  gap-6">
                <li>
                    <Link to="/crew/douglasHurley">
                        <button className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full"></button>
                    </Link>
                </li>
                <li>
                    <Link to="/crew/markShuttleworth">
                        <button className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full"></button>
                    </Link>
                </li>
                <li>
                    <Link to="/crew/vitorGlover">
                        <button className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full"></button>
                    </Link>
                </li>
                <li>
                    <Link to="/crew/anoushehAnsari">
                        <button className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full"></button>
                    </Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavCrew