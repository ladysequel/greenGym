import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HOC from "./HOC";
import Home from "./containers/Home";
import CreateRoutine from "./containers/CreateRoutine";
import PerformRoutine from "./containers/PerformRoutine"
import HomeRedirect from "./containers/HomeRedirect";

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomeRedirect} />
                <Route exact path="/home" component={HOC(Home)} />
                <Route path="/create-routine" component={HOC(CreateRoutine)} />
                <Route path="/perform-routine" component={HOC(PerformRoutine)} />
            </Switch>
        </Router>
    );
};

export default Routes;