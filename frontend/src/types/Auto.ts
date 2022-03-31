export interface carsState {
    cars: {
        body: string,
        brand: string,
        car_drive: string,
        color: string,
        dc: string,
        desc: string,
        engine_capacity: number,
        engine_type: string,
        id: number,
        model: string,
        photos: string[],
        price: number,
        region: string,
        road_accident: boolean,
        run: number,
        state_number: null | string,
        toll: boolean,
        top_car: string
        transmission: boolean,
        video_car: string,
        vin_code_car: null | string,
        year: number
    }[]
}

export enum carsActionType {
    FETCH_CARS = 'FETCH_CARS',
}

export type carsAction = {
    type: carsActionType;
    payload?: any
}
