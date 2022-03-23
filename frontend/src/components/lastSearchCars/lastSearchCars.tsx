import React, {useState} from 'react';
import {lastSearchType} from "../../types/all";

const LastSearchCars: React.FC = () => {
    const lastSearch: lastSearchType[] = [
        {
            id: 1,
            name: 'Mazda 6'
        },
        {
            id: 2,
            name: 'Dodge Journey'
        },
        {
            id: 3,
            name: 'Subaru Forester'
        },
        {
            id: 4,
            name: 'BMW 5'
        },
        {
            id: 5,
            name: 'Mercedes-Benz S63'
        }
    ]

    const shortListLastSearch = lastSearch.filter(car => car.id === 1 || car.id === 2);

    const [visiableLastCars, setVisiableLastCars] = useState(shortListLastSearch)

    const setVisiableLastCarsOnPage = () => {
        if (visiableLastCars.length > 2) {
            setVisiableLastCars(lastSearch.filter(car => car.id === 1 || car.id === 2))
        } else {
            setVisiableLastCars(lastSearch)
        }
    }

    return (
        <div className="cars-lastSearch">
            <p>
                <span>Останні пошуки </span>
                <span className="dot">за годину <a href="###">+ 190</a> </span>
                <span className="dot">за день <a href="###">+ 2 652</a> </span>
                <span className="dot">перевірено по VIN-коду <a href="###">+ 66 826</a></span>
            </p>
            <div>
                {visiableLastCars.map(el => {
                    return <a key={el.id}>{el.name}</a>
                })}
                {visiableLastCars.length > 2 ?
                    <p className="hide" onClick={setVisiableLastCarsOnPage}><span>Сховати</span></p> :
                    <p className="show" onClick={setVisiableLastCarsOnPage}><span>Показати ще</span></p>
                }
            </div>
        </div>
    );
};

export default LastSearchCars;
