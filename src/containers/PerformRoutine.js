import "../styles/styles.css"
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


library.add(faPlus, faChevronRight);

export default function PerformRoutine(props) {
    const [counter, setCounter] = useState(45);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
    return (
        <>
            <div className="flex">
                <p>Get ready...</p>
                <div className="flex ml-auto">
                    <p className="font-bold text-sm text-right text-green-600 mr-1">Next Workout</p>
                    <FontAwesomeIcon icon={faChevronRight} className="text-green-600 my-auto"></FontAwesomeIcon>
                </div>

            </div>
            <div className="bg-gray-200 p-4 mt-4 flex">
                <h1>Workout Name</h1>
                <div className="ml-auto">
                    <p className="font-bold text-sm text-right">Target Reps: 10</p>
                </div>

            </div>
            <div className="md:flex block">
                <img src="card.jpg" className="mx-auto md:w-1/2 w-11/12 rounded my-4"></img>

                <div className="md:w-1/3 w-1/2 p-4 mx-auto my-4">
                    <CircularProgressbar
                        value={counter}
                        text={`${counter}`}
                        styles={buildStyles({
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',

                            // Text size
                            textSize: '16px',

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',

                            // Colors
                            pathColor: `#006400	`,
                            textColor: '#006400',
                            trailColor: '#d6d6d6',
                        })} />
                </div>
            </div>
        </>
    )
}
