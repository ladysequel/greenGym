import "../styles/Buttons.css"
import "../styles/Form.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faClock, faRunning } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus, faTimes, faClock, faRunning);

export default function CreateRoutine(props) {

    const [collectionWorkout, setCollectionWorkout] = useState([]);
    const [workout, setWorkout] = useState({ name: "", time: 0, reps: 0 })

    function addWorkout(event) {
        setCollectionWorkout([...collectionWorkout, workout])
        setWorkout({ name: "", time: 0, reps: 0 });

    }

    function deleteWorkout(idx) {
        let result = collectionWorkout.filter((element, index) => index !== idx);
        setCollectionWorkout(result);
    }

    function validation() {
        return workout.name !== "" && workout.time !== 0 && workout.reps > 0
    }

    function saveFile() {

    }

    return (
        <div className="overflow-hidden overflow-y-auto" style={{ height: "80vh" }}>
            <div className="flex md:border-b md:border-grey-200 pb-2 md:mb-4">
                <div className="w-1/2">
                    <h1 className="font-bold">Routine</h1>
                    <p className="text-sm">Create routine below</p>
                </div>
                <Link
                    to="/perform-routine"
                    className={collectionWorkout.length > 0 ?
                        "w-1/2 bg-green-500 text-white rounded py-2 text-center my-2"
                        : "w-1/2 bg-gray-500 text-white rounded py-2 text-center my-2"}

                    style={{ maxWidth: "300px" }}>
                    Start<FontAwesomeIcon icon={faRunning} className="ml-2"></FontAwesomeIcon>
                </Link>
            </div>
            <div className="lg:flex">
                <div className="lg:w-1/2 md:w-2/3 w-full md:mx-auto md:mt-3">
                    <h2 className="font-bold md:mt-3 md:mb-4">Workout Detail</h2>
                    <form className="bg-gray-800 text-white p-4 my-2 rounded md:mx-auto " style={{ maxWidth: "350px" }}>
                        <div>
                            <label className="FormFieldLabel" htmlFor="name">Workout *</label>
                            <input
                                className="FormField"
                                id="name" type="text"
                                value={workout.name}
                                onChange={(event) => {

                                    setWorkout({ ...workout, name: event.target.value })
                                }}
                                required>
                            </input>
                        </div>
                        <div className="md:flex block">
                            <div className="md:w-1/2 mr-1">
                                <label className="FormFieldLabel" htmlFor="time">Time Interval *</label>
                                <select
                                    className="FormField"
                                    id="time"
                                    type="number"
                                    value={workout.time}
                                    onChange={(event) => {

                                        setWorkout({ ...workout, time: event.target.value })
                                    }}
                                    required>
                                    <option>Select time</option>
                                    <option value="15"> 15(s)</option>
                                    <option value="30"> 30(s)</option>
                                    <option value="45"> 45(s)</option>
                                    <option value="60"> 1(m)</option>
                                    <option value="75"> 1(m) 15(s)</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 ml-1">
                                <label className="FormFieldLabel" htmlFor="reps">Reps *</label>
                                <input
                                    className="FormField"
                                    id="reps" type="number"
                                    value={workout.reps}
                                    onChange={(event) => {
                                        setWorkout({ ...workout, reps: event.target.value })
                                    }}
                                    required
                                ></input>
                            </div>
                        </div>
                        <button
                            className={validation() ?
                                "w-full bg-green-500 text-white rounded py-2 mx-auto my-2"
                                : "w-full bg-gray-500 text-white rounded py-2 mx-auto my-2"}
                            disabled={validation() ? false : true}
                            onClick={addWorkout}
                        >
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add
                </button>
                    </form>
                </div>
                <div className="lg:w-1/2 md:w-2/3 w-full md:mx-auto md:mt-3">
                    <h2 className="font-bold">Summary</h2>
                    {collectionWorkout && collectionWorkout.map((element, idx) => {
                        return (
                            <div key={idx} className="flex p-3 rounded bg-gray-200 my-4">
                                <div className="w-3/4 py-2">
                                    <span className="mr-2">{element.name}</span>
                                    <FontAwesomeIcon icon={faClock} className="mr-1"></FontAwesomeIcon>
                                    <span className="mr-2">{element.time}</span>
                                X <span>{element.reps}</span>
                                </div>

                                <div className="w-1/4 text-right">
                                    <button className="py-2 px-4 text-white rounded-full bg-red-500 ml-auto list-item"
                                        onClick={() => deleteWorkout(idx)}>
                                        <FontAwesomeIcon icon={faTimes} ></FontAwesomeIcon>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
