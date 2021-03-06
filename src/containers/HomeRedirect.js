import * as React from "react";
import { Redirect, withRouter } from "react-router-dom";

const HomeRedirect = (props) => {
    return (
        <div>
            <Redirect to={"/home"} />
        </div>
    );
};

export default withRouter(HomeRedirect);