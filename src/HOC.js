import React, { useReducer, createContext } from "react";
import { withRouter } from "react-router-dom";
import '../src/styles/styles.css';
import Header from "./parts/header.js";
import NavBar from "./parts/navBar.js";

export const WorkoutCollectionContext = React.createContext([]);

const initialState = {
  collectionWorkout: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_WORKOUT":
      return {
        collectionWorkout: [...state.collectionWorkout, action.payload]
      };
    case "DEL_WORKOUT":
      return {
        collectionWorkout: state.collectionWorkout.filter(
          (element, index) => index !== action.payload
        )
      };
  }
};

export default (WrappedComponent) => {
  const HOC = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        <Header />
        <main className="md:flex block" >
          <NavBar />
          <div className="p-4 md:p-6 md:w-full overflow-hidden overflow-y-auto" style={{ minHeight: "80vh" }}>
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
