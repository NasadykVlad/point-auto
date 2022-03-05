import {topCarsAction, topCarsActionType} from '../../types/topAuto'
import {Dispatch} from 'redux';
import axios from 'axios'


export const fetchCars = () => {
    return async (dispatch: Dispatch<topCarsAction>) => {
        try {
            const response = await axios.get('https://cars-test-bd.herokuapp.com/cars/getCars')
            dispatch({
                type: topCarsActionType.FETCH_TOP_CARS,
                payload: response.data.cars
            })
        } catch (e) {
            console.log(e)
        }
    }
}
