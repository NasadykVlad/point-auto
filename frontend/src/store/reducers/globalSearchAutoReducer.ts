import {carsActionType, carsState, carsAction} from '../../types/Auto'

const initialState: carsState = {
    cars: []
}


export const autoReducer = (state = initialState, action: carsAction): carsState => {
    switch(action.type) {
        case carsActionType.FETCH_CARS:
            return {
                cars: action.payload
            }
        default:
            return state
    }
}
