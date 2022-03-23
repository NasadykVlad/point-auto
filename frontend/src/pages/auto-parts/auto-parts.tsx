import React, {useEffect, useState} from 'react';
import './auto-parts.scss'
import {useAuth} from "../../hooks/auth.hook";
import axios from "axios";

const AutoParts: React.FC = () => {

    const {login, logout} = useAuth()

    const [users, setUsers] = useState<[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    function fetchUsers() {
        axios.get<[]>('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data)
            })
    }

    return (
        <div>
            <h1>AutoParts</h1>
            <button onClick={() => login('token')}>LogIn</button>
            <button onClick={() => logout()}>LogOut</button>
        </div>
    );
};

export default AutoParts;
