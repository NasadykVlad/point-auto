import {combineReducers} from "redux";
import {topAutoReducer} from "./topAutoReducer"
import {userReducer} from './userReducer'
import {autoReducer} from "./globalSearchAutoReducer";

export const rootReducer = combineReducers({
    topCars: topAutoReducer,
    user: userReducer,
    auto: autoReducer
})

export type RootState = ReturnType<typeof rootReducer>
