import "../styles/Buttons.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faHome, faChartLine, faDumbbell, faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faPlusCircle, faHome, faChartLine, faDumbbell, faUser);

function NavBar(props) {
    return (
        <>
            <div className="w-full absolute bottom-0 py-2 bg-green-500 flex md:block md:w-36 md:relative md:top-0 md:h-screen">
                <Link to="/Home" className="NavButton w-1/4 md:w-1/2 md:block md:py-4">
                    <FontAwesomeIcon icon={faHome} className="md:text-center" />
                    <p>Home</p>
                </Link>
                <Link to="/create-routine" className="NavButton w-1/4 md:w-1/2 md:block md:py-4">
                    <FontAwesomeIcon icon={faChartLine} className="md:text-center" />
                    <p>Progress</p>
                </Link>
                <Link to="/create-routine" className="NavButton w-1/4 md:w-1/2 md:block md:py-4">
                    <FontAwesomeIcon icon={faDumbbell} className="md:text-center" />
                    <p>Workouts</p>
                </Link>
                <Link to="/create-routine" className="NavButton w-1/4 md:w-1/2 md:block md:py-4">
                    <FontAwesomeIcon icon={faUser} className="md:text-center" />
                    <p>Account</p>
                </Link>
            </div>
        </>
    )
}

export default NavBar;