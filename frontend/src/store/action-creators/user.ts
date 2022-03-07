import {userAction, userActionType} from '../../types/user'
import {Dispatch} from 'redux';


export const login = (token: string) => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({
                type: userActionType.LOGIN,
                payload: token
            })
            localStorage.setItem('userData', JSON.stringify({
                token: token
            }))
        } catch (e) {
            console.log(e)
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({
                type: userActionType.LOGOUT
            })
            localStorage.removeItem('userData')
        } catch (e) {
            console.log(e)
        }
    }
}

