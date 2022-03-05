export interface topAutoState {
    cars: any[]
}

export enum topCarsActionType {
    FETCH_TOP_CARS = 'FETCH_TOP_CARS',
}

export type topCarsAction = {
    type: topCarsActionType;
    payload?: any
}
