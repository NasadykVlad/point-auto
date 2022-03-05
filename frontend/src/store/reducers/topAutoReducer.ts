import {topAutoState, topCarsActionType, topCarsAction} from '../../types/topAuto'

const initialState: topAutoState = {
    cars: []
}


export const topAutoReducer = (state = initialState, action: topCarsAction): topAutoState => {
    switch(action.type) {
        case topCarsActionType.FETCH_TOP_CARS:
            return {
                cars: action.payload.cars
            }
        default:
            return state
    }
}
