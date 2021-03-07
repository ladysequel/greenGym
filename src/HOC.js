import React, { useReducer, createContext } from "react";
import { withRouter } from "react-router-dom";
import '../src/styles/styles.css';
import Header from "./parts/header.js";
import NavBar from "./parts/navBar.js";

export const WorkoutCollectionContext = React.createContext([]);

const initialState = {
  collectionWorkout: JSON.parse(localStorage.getItem("workouts")) ? JSON.parse(localStorage.getItem("workouts")) : []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_WORKOUT":
      localStorage.setItem("workouts", JSON.stringify([...state.collectionWorkout, action.payload]));
      return {
        collectionWorkout: [...state.collectionWorkout, action.payload]
      };
    case "DEL_WORKOUT":
      let result = state.collectionWorkout.filter(
        (element, index) => index !== action.payload
      )
      localStorage.setItem("workouts", JSON.stringify(result));

      return {
        collectionWorkout: result
      };
    case "WORKOUT_COMPLETED":
      localStorage.clear();
      return {
        collectionWorkout: []
      };
  }
};

export default (WrappedComponent) => {
  const HOC = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
        <Header style={{ minHeight: "10vh" }} />
        <main className="md:flex block" >
          <NavBar style={{ minHeight: "10vh" }} />
          <div className="p-4 md:p-6 md:w-full" style={{ minHeight: "70vh" }}>
            <WorkoutCollectionContext.Provider value={[state, dispatch]}>
              <WrappedComponent {...props} />
            </WorkoutCollectionContext.Provider>
          </div>

        </main>
      </div>
    );
  }

  return withRouter(HOC);
};
