import {combineReducers} from "redux";
import {topAutoReducer} from "./topAutoReducer"
import {userReducer} from './userReducer'

export const rootReducer = combineReducers({
    topCars: topAutoReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
