import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../src/styles/styles.css';
import Header from "./parts/header.js";
import NavBar from "./parts/navBar.js";

export default (WrappedComponent) => {

  class HOC extends Component {


    render() {
      return (
        <div>
          <Header />
          <main className="md:flex block" >
            <NavBar />
            <div className="p-4 md:p-6 md:w-full overflow-hidden overflow-y-auto" style={{ minHeight: "80vh" }}>
              <WrappedComponent {...this.props} />
            </div>

          </main>
        </div>
      );
    }
  }

  return withRouter(HOC);
};
