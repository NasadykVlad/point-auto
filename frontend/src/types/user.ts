export interface userState {
    token: null | string,
}

export enum userActionType {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

export type userAction = {
    type: userActionType,
    payload?: any
}
