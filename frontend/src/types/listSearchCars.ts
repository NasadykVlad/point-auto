export interface listSearchCarsState {
    allCarsAndBrands: any[]
}

export enum listSearchCarsActionType {
    FETCH_LIST_SEARCH_CARS = 'FETCH_LIST_SEARCH_CARS',
}

export type listSearchCarsAction = {
    type: listSearchCarsActionType;
    payload?: any
}
