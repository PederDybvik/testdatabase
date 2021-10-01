import React from "react";
import Admin from "./admin";
import Meny from "./Meny"
import NavBar from "./NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Routes = () => { return (

    <Router>
        <Route patch="/"> <NavBar/> </Route>
        <Switch>
            <Route path="/meny"> <Meny/> </Route>
            <Route path="/admin"> <Admin /> </Route>
        </Switch>





    </Router>


)}

export default Routes