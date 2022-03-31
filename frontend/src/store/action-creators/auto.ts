import {carsAction, carsActionType} from '../../types/Auto'
import {Dispatch} from 'redux';
import axios from 'axios'


export const fetchAllCars = () => {
    return async (dispatch: Dispatch<carsAction>) => {
        try {
            const response = await axios.get('http://localhost:5001/api/cars/getAllCars')
            dispatch({
                type: carsActionType.FETCH_CARS,
                payload: response.data.cars
            })
        } catch (e) {
            console.log(e)
        }
    }
}
