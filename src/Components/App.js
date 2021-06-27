import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';


export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/sign-up" exact={true} component={SignUp} />
            </Switch>
        </BrowserRouter>


    );
}