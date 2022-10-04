import { Link } from "react-router-dom"

const NavCrew = () =>{
    return(
        <nav>
            <ul className="flex gap-6 mt-24">
                <li className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full">
                    <Link to="/crew/douglasHurley">
                        <button></button>
                    </Link>
                </li>
                <li className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full">
                    <Link to="/crew/markShuttleworth"></Link>
                </li>
                <li className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full">
                    <Link to="/crew/vitorGlover"></Link>
                </li>
                <li className="w-[15px] h-[15px] bg-white bg-opacity-[0.17] rounded-full">
                    <Link to="/crew/anoushehAnsari"></Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavCrew