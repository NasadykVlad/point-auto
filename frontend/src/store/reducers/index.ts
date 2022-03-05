import {combineReducers} from "redux";
import {topAutoReducer} from "./topAutoReducer"

export const rootReducer = combineReducers({
    topCars: topAutoReducer
})

export type RootState = ReturnType<typeof rootReducer>
