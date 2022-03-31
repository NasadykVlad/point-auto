import React, {ChangeEvent, useEffect, useState} from 'react';
import "./CarsOnSearch.scss"
import {fillingPeriod, optionsTypeSort} from '../../data/carsPage'
import {useActions} from "../../hooks/useActions";
import {usedTypedSelector} from "../../hooks/usedTypedSelector";
import OtherCarOnSearch from "../otherCarOnSearch/otherCarOnSearch";

const CarsOnSearch: React.FC = () => {
    const {fetchAllCars} = useActions()

    useEffect(() => {
        fetchAllCars()
    }, [])

    const {cars} = usedTypedSelector(state => state.auto)

    const [selectSort, setSelectSort] = useState(optionsTypeSort[0].label)
    const [selectPeriod, setSelectPeriod] = useState(fillingPeriod[0].label)

    const changeSortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectSort(event.target.value)
    }

    const changePeriodHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectPeriod(event.target.value)
    }

    return (
        <div className="CarsOnSearch">
            <div className="sort">
                <p><span>Сортування:</span>
                    <select defaultValue={selectSort} onChange={event => changeSortHandler(event)}>
                        {optionsTypeSort.map(sort => {
                            return <option value={sort.label} key={sort.label}>{sort.label}</option>
                        })}
                    </select>
                </p>
                <p className="filling">Період подачі:
                    <select defaultValue={selectPeriod} onChange={event => changePeriodHandler(event)}>
                        {fillingPeriod.map(period => {
                            return <option value={period.label} key={period.label}>{period.label}</option>
                        })}
                    </select>
                </p>
            </div>
            {cars.map(car => {
                return <OtherCarOnSearch car={car}/>
            })}
        </div>
    );
};

export default CarsOnSearch;
