import {useEffect, useState} from 'react'
import {usedTypedSelector} from "./usedTypedSelector";
import {useActions} from "./useActions";

export const useAuth = () => {
    const {token} = usedTypedSelector(state => state.user)

    const {login, logout} = useActions()

    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData')!)
        if (data && data.token) {
            login(data.token)
        }
        setIsReady(true)
    }, [])

    return {login, logout, token, isReady}
}
