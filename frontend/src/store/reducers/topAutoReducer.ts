import {topAutoState, topCarsActionType, topCarsAction} from '../../types/topAuto'

const initialState: topAutoState = {
    cars: [
        {
            id: 1,
            owner: 'nasadyk',
            brand: 'Dacia',
            model: 'Logan',
            year: '2006',
            color: 'red',
            toll: true,
            engine_type: 'fuel',
            engine_capacity: '1.4',
            region: 'Івано-Франківськ',
            price: '3 000 $',
            body: 'sedan',
            transmission: 'm',
            car_drive: 'FWD',
            photos: [
                'https://cdn1.riastatic.com/photosnew/auto/photo/dacia_logan__442103571fx.webp',
                'https://cdn4.riastatic.com/photosnew/auto/photo/dacia_logan__442103574fx.webp',
                'https://cdn4.riastatic.com/photosnew/auto/photo/dacia_logan__442103599fx.webp'
            ],
            road_accident: true,
            top_car: true,
            vin_code_car: 'vin',
            video_car: 'video',
            run: 193000
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
            region: 'Івано-Франківськ',
            price: '9 000 $',
            body: 'sedan',
            transmission: 'a',
            car_drive: 'RWD',
            photos: [
                'https://cdn4.riastatic.com/photosnew/auto/photo/bmw_535__441871489fx.webp',
                'https://cdn0.riastatic.com/photosnew/auto/photo/bmw_535__441871490fx.webp',
                'https://cdn2.riastatic.com/photosnew/auto/photo/bmw_535__441871492fx.webp',
                'https://cdn3.riastatic.com/photosnew/auto/photo/bmw_535__441871503fx.webp'
            ],
            road_accident: false,
            top_car: true,
            vin_code_car: 'vin',
            video_car: 'video',
            run: 321000
        },
        {
            id: 3,
            owner: 'nasadyk',
            brand: 'Mazda',
            model: '6',
            year: '2011',
            color: 'grey',
            toll: true,
            engine_type: 'diesel',
            engine_capacity: '2.2',
            region: 'Івано-Франківськ',
            price: '8 600 $',
            body: 'wagon',
            transmission: 'm',
            car_drive: 'FWD',
            photos: [
                'https://cdn3.riastatic.com/photosnew/auto/photo/mazda_6__441948288fx.webp',
                'https://cdn2.riastatic.com/photosnew/auto/photo/mazda_6__441948287fx.webp',
                'https://cdn0.riastatic.com/photosnew/auto/photo/mazda_6__441948325fx.webp',
                'https://cdn1.riastatic.com/photosnew/auto/photo/mazda_6__441948336fx.webp'
            ],
            road_accident: false,
            top_car: true,
            vin_code_car: 'vin',
            video_car: 'video',
            run: 181000
        },
        {
            id: 4,
            owner: 'nasadyk',
            brand: 'Volkswagen',
            model: 'Passat B6',
            year: '2009',
            color: 'black',
            toll: true,
            engine_type: 'diesel',
            engine_capacity: '2',
            region: 'Івано-Франківськ',
            price: '8 600 $',
            body: 'wagon',
            transmission: 'm',
            car_drive: 'FWD',
            photos: [
                'https://cdn0.riastatic.com/photosnew/auto/photo/volkswagen_passat-b6__442068235fx.webp',
                'https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_passat-b6__442068241fx.webp',
                'https://cdn2.riastatic.com/photosnew/auto/photo/volkswagen_passat-b6__442068242fx.webp',
                'https://cdn4.riastatic.com/photosnew/auto/photo/volkswagen_passat-b6__442068244fx.webp'
            ],
            road_accident: false,
            top_car: true,
            vin_code_car: 'vin',
            video_car: 'video',
            run: 221000
        },
        {
            id: 5,
            owner: 'nasadyk',
            brand: 'Volvo',
            model: 'XC60',
            year: '2012',
            color: 'black',
            toll: true,
            engine_type: 'diesel',
            engine_capacity: '2.4',
            region: 'Івано-Франківськ',
            price: '8 600 $',
            body: 'wagon',
            transmission: 'm',
            car_drive: 'AWD',
            photos: [
                'https://cdn2.riastatic.com/photosnew/auto/photo/volvo_xc60__441955607fx.webp',
                'https://cdn3.riastatic.com/photosnew/auto/photo/volvo_xc60__441955608fx.webp',
                'https://cdn4.riastatic.com/photosnew/auto/photo/volvo_xc60__441955604fx.webp',
                'https://cdn4.riastatic.com/photosnew/auto/photo/volvo_xc60__441955609fx.webp'
            ],
            road_accident: false,
            top_car: true,
            vin_code_car: 'vin',
            video_car: 'video',
            run: 99000
        },
        {
            id: 6,
            owner: 'nasadyk',
            brand: 'Ford',
            model: 'Mondeo',
            year: '2016',
            color: 'white',
            toll: true,
            engine_type: 'gaz',
            engine_capacity: '2.5',
            region: 'Івано-Франківськ',
            price: '12 600 $',
            body: 'sedan',
            transmission: 'm',
            car_drive: 'FWD',
            photos: [
                'https://cdn4.riastatic.com/photosnew/auto/photo/ford_mondeo__436367569fx.webp',
                'https://cdn1.riastatic.com/photosnew/auto/photo/ford_mondeo__436367581fx.webp',
                'https://cdn0.riastatic.com/photosnew/auto/photo/ford_mondeo__436367565fx.webp',
                'https://cdn3.riastatic.com/photosnew/auto/photo/ford_mondeo__436367583fx.webp'
            ],
            road_accident: false,
            top_car: false,
            vin_code_car: 'vin',
            video_car: 'video',
            run: 155000
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
