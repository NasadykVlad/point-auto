import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from "../../routes";
import {useAuth} from "../../hooks/auth.hook"
import React from "react";
import './app.scss'
import NavBar from "../navbar/navbar";

function App() {
    const {token} = useAuth()
    const isLogin = !!token
    const routes = useRoutes(isLogin);

    return (
            <div className="App">
                <BrowserRouter>
                    <NavBar />
                    {routes}
                </BrowserRouter>
            </div>
    );
}

export default App;
