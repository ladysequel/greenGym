import "../styles/styles.css"
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight, faClock, faRedo } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


library.add(faPlus, faChevronRight, faClock, faRedo);

export default function PerformRoutine(props) {

    const [collectionWorkout, setCollectionWorkout] = useState([
        { name: "Bench Press", time: 30, reps: 1 },
        { name: "Arnold Pushup", time: 10, reps: 2 },
        { name: "Crunches", time: 20, reps: 3 },
        { name: "Mountain Climbers", time: 10, reps: 4 },
        { name: "Pause", time: 20, reps: 5 },

    ]);
    const [counter, setCounter] = useState(collectionWorkout[0].time);
    const [pointer, setPointer] = useState(0);

    useEffect(() => {
        if (pointer < collectionWorkout.length) {
            if (counter > 0) {
                setTimeout(() => setCounter(counter - 1), 1000);
            } else {
                setPointer(pointer + 1);
                setCounter(collectionWorkout[pointer].time);
            }
        }
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
                <h1>{collectionWorkout[pointer].name}</h1>
                <div className="ml-auto">
                    <p className="font-bold text-sm text-right">Target Reps: {collectionWorkout[pointer].reps}</p>
                </div>

            </div>

            <div className="flex">
                <ul className="lg:w-1/3 my-4">
                    {collectionWorkout && collectionWorkout.map((element, idx) => {
                        return (
                            <li key={idx} className=" bg-gray-900 p-4 border border-gray-200 flex rounded text-white">
                                <h2 className="w-1/2 mb-2 my-auto">{element.name}</h2>
                                <p className="w-1/4 my-auto mx-2">
                                    <FontAwesomeIcon icon={faClock} className="mr-2"></FontAwesomeIcon>
                                    {element.time}
                                </p>
                                <p className="w-1/4 my-auto">
                                    <FontAwesomeIcon icon={faRedo} className="mr-2"></FontAwesomeIcon>
                                    {element.reps}
                                </p>
                                <button className="py-2 px-4 text-white bg-blue-500 ml-auto list-item"
                                >
                                    Done
                                </button>
                            </li>
                        )
                    })}
                </ul>

                <div className="flex">
                    <img src="workoutOne.gif" className="ml-16 w-full rounded my-4"></img>
                    <div className="w-40 p-4 mx-auto my-4 absolute right-20">
                        <CircularProgressbar
                            value={counter}
                            text={`${counter}`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#4aa564",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />


                    </div>

                </div>

            </div >
        </>
    )
}
