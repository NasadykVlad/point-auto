import {topAutoState, topCarsActionType, topCarsAction} from '../../types/topAuto'

const initialState: topAutoState = {
    cars: [
        {
            id: 1,
            owner: 'nasadyk',
            brand: 'Dacia',
            model: 'Logan',
            year: '2006',
            color: 'blue',
            toll: true,
            engine_type: 'fuel',
            engine_capacity: '1.4',
            region: 'Ivano-Frankivsk',
            price: '3000',
            body: 'sedan',
            transmission: 'm',
            car_drive: 'FWD',
            photos: [],
            road_accident: true,
            top_car: true,
            vin_code_car: 'vin',
            video_car: 'video'
        },
        {
            id: 2,
            owner: 'nasadyk',
            brand: 'BMW',
            model: '5',
            year: '2008',
            color: 'black',
            toll: true,
            engine_type: 'diesel',
            engine_capacity: '3.0',
            region: 'Ivano-Frankivsk',
            price: '9000',
            body: 'sedan',
            transmission: 'a',
            car_drive: 'RWD',
            photos: [],
            road_accident: false,
            top_car: true,
            vin_code_car: 'vin',
            video_car: 'video'
        },
        {
            id: 3,
            owner: 'nasadyk',
            brand: 'Mazda',
            model: '6',
            year: '2011',
            color: 'white',
            toll: true,
            engine_type: 'diesel',
            engine_capacity: '2.2',
            region: 'Ivano-Frankivsk',
            price: '8600',
            body: 'wagon',
            transmission: 'm',
            car_drive: 'FWD',
            photos: [],
            road_accident: false,
            top_car: true,
            vin_code_car: 'vin',
            video_car: 'video'
        }
    ]
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
