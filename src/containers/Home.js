import "../styles/Buttons.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom"

library.add(faPlus);

function Home(props) {
    return (
        <div>
            <div className="flex" >
                <div>
                    <h1 className="my-auto font-bold text-lg">Hello, Grace</h1>
                    <p className="text-sm">Your last workout recorded on 14/01/21</p>
                </div>
                <div className="bg-green-500 text-white rounded w-48 ml-auto my-4">
                    <Link to="/create-routine" className="flex px-4 py-2 place-content-center">
                        <p className="my-auto">Create Routine</p>
                        <FontAwesomeIcon icon={faPlus} size="2x" className="mx-2"></FontAwesomeIcon>
                    </Link>
                </div>
            </div>

            <div className="w-full h-48 bg-green-800 rounded my-4 text-sm text-white text-center">
                Banner content
            </div>

            <div className="md:flex block">
                <div className="md:W-1/3 w-full bg-gray-200 rounded text-center p-4 my-2 md:mx-4">
                    <img src="card.jpg" alt="" className="h-40 mx-auto"></img>
                    <h2>What is Lorem Ipsum?</h2>
                    <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="md:W-1/3 w-full bg-gray-200 rounded text-center p-4 my-2 md:mx-4">
                    <img src="card.jpg" alt="" className="h-40 mx-auto"></img>
                    <h2>What is Lorem Ipsum?</h2>
                    <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>
                <div className="md:W-1/3 w-full bg-gray-200 rounded text-center p-4 my-2 md:mx-4">
                    <img src="card.jpg" alt="" className="h-40 mx-auto"></img>
                    <h2>What is Lorem Ipsum?</h2>
                    <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>
            </div>
        </div>
    )
}

export default Home;