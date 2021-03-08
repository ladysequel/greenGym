import "../styles/styles.css"
import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight, faClock, faRedo, faCheckCircle, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


library.add(faPlus, faChevronRight, faClock, faRedo, faCheckCircle);

export default function PerformRoutine(props) {
    const [collectionWorkout, setCollectionWorkout] = useState(JSON.parse(localStorage.getItem("workouts")));
    const [counter, setCounter] = useState(collectionWorkout[0].time);
    const [pointer, setPointer] = useState(0);

    useEffect(() => {
        if (pointer < collectionWorkout.length) {
            if (counter > 0) {
                setTimeout(() => setCounter(counter - 1), 1000);
            } else {
                setPointer(pointer + 1);
                if (collectionWorkout[pointer + 1]) {
                    setCounter(collectionWorkout[pointer + 1].time);
                }
            }
        }
        return () => {
        }
    }, [counter]);

    return (
        <>
            {
                pointer < collectionWorkout.length ? (
                    <div className="overflow-hidden overflow-y-auto" style={{ height: "80vh" }}>
                        <div className="bg-gray-200 p-4 mt-4 flex">
                            <h1>{collectionWorkout[pointer].name}</h1>
                            <div className="ml-auto">
                                <p className="font-bold text-sm text-right">Target Reps: {collectionWorkout[pointer].reps}</p>
                            </div>

                        </div>

                        <div className="lg:flex">
                            <div className="lg:w-2/3 lg:mr-2 flex relative">
                                <img src="workoutOne.gif" className="w-full rounded my-4"></img>
                                <div className="md:w-36 w-24 px-2 py-4 mx-auto absolute right-0">

                                    <CircularProgressbar
                                        value={(counter / collectionWorkout[pointer].time) * 100}
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
                            <ul className="lg:w-1/3 my-4">
                                {collectionWorkout && collectionWorkout.map((element, idx) => {
                                    return (
                                        <li key={idx} className={pointer === idx ? "bg-green-500 p-4 border border-gray-200 flex rounded text-black" : "bg-gray-900 p-4 border border-gray-200 flex rounded text-white"}>
                                            <h2 className="w-1/2 mb-2 my-auto">{element.name}</h2>
                                            <p className="w-1/4 my-auto mx-2">
                                                <FontAwesomeIcon icon={faClock} className="mr-2"></FontAwesomeIcon>
                                                {element.time}
                                            </p>
                                            <p className="w-1/4 my-auto">
                                                <FontAwesomeIcon icon={faRedo} className="mr-2"></FontAwesomeIcon>
                                                {element.reps}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>



                        </div >
                    </div>
                ) :
                    (
                        <div className="lg:w-1/2 w-10/12 h-1/3 bg-gray-300 mx-auto my-4 p-10 rounded" >
                            <h1 className="font-bold text-xl text-center">Workout Completed</h1>
                            <div className="text-center my-4">
                                <FontAwesomeIcon
                                    className="text-green-500 "
                                    icon={faCheckCircle}
                                    size="4x">

                                </FontAwesomeIcon>
                            </div>
                            <div className="text-center mt-16 md:flex block place-content-center">
                                <div className="h-20">
                                    <Link
                                        to="/home"
                                        className="bg-blue-500 text-white rounded p-4 text-center m-2"
                                        style={{ maxWidth: "300px" }}>
                                        <FontAwesomeIcon icon={faChevronLeft} className="mr-2"></FontAwesomeIcon>Back
                                </Link>
                                </div>
                                <div className="h-20">
                                    <Link
                                        to="/create-routine"
                                        className="bg-blue-500 text-white rounded p-4 text-center m-2"
                                        style={{ maxWidth: "300px" }}>
                                        New Workout<FontAwesomeIcon icon={faPlus} className="ml-2"></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}
