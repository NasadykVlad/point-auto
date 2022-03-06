import {useEffect, useState} from 'react'
import {usedTypedSelector} from "./usedTypedSelector";
import {useActions} from "./useActions";

export const useAuth = () => {
    const {token} = usedTypedSelector(state => state.user)

    const {login, logout} = useActions()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData')!)
        if (data && data.token) {
            login(data.token)
        }
    }, [])

    return {login, logout, token}
}
