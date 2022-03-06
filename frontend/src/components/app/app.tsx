import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from "../../routes";
import {useAuth} from "../../hooks/auth.hook"
import {AuthContext} from "../../context/AuthContext";
import React from "react";
import './app.scss'
import NavBar from "../navbar/navbar";

function App() {
    const {token, isReady} = useAuth()
    const isLogin = !!token
    const routes = useRoutes(isLogin);

    return (
        <AuthContext.Provider value={{token, isReady, isLogin}}>
            <div className="App">
                <BrowserRouter>
                    <NavBar />
                    {routes}
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
