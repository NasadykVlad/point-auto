import React from 'react';
import './auto-parts.scss'
import {useAuth} from "../../hooks/auth.hook";

const AutoParts = () => {

    const {login, logout} = useAuth()

    return (
        <div>
            <h1>AutoParts</h1>
            <button onClick={() => login('token')}>LogIn</button>
            <button onClick={() => logout()}>LogOut</button>
        </div>
    );
};

export default AutoParts;
