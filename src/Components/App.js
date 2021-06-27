import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import Welcome from './Welcome';
import AddIn from "./AddIn";
import AddOut from "./AddOut";
import UserContext from '../contexts/UserContext';

export default function App() {
    const [user, setUser] = useState();
    return (
        <BrowserRouter>
            <Switch>
                <UserContext.Provider value={{ user, setUser }}>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/sign-up" exact={true} component={SignUp} />
                    <Route path="/welcome" exact={true} component={Welcome} />
                    <Route path="/nova-entrada" exact={true} component={AddIn} />
                    <Route path="/nova-saida" exact={true} component={AddOut} />
                </UserContext.Provider>
            </Switch>
        </BrowserRouter>


    );
}