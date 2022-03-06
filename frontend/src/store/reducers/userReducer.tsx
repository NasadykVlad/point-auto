import {userActionType, userAction, userState} from '../../types/user'

const initialState: userState = {
    token: null
}


export const userReducer = (state = initialState, action: userAction): userState => {
    switch (action.type) {
        case userActionType.LOGIN:
            return {
                token: action.payload
            }
        case userActionType.LOGOUT:
            return {
                token: null
            }
        default:
            return state
    }
}
