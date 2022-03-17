import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './cars.scss'
import SearchCars from "../../components/search-cars/search_cars";
import {lastSearchType} from "../../types/all";
import TopVisibleCar from "../../components/TopVisibleCar/TopVisibleCar";

const Cars = () => {
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
        <>
            <div className="cars">
                <div className="Cars">
                    <div>
                        <img src="./images/logo.svg" alt="Logo"/>
                    </div>
                    <div className="Cars_secondNav">
                        <ul>
                            <li><Link to='/'>Вживані авто</Link></li>
                            <li><Link to='/'>Нові авто</Link></li>
                            <li><Link to='/'>Новини</Link></li>
                            <li><Link to='/'>Все для авто</Link></li>
                        </ul>
                    </div>
                    <div className="Cars_sellCar">
                        <Link to="/sell-car"><span>+</span> Продати авто</Link>
                    </div>
                </div>
                <h2>Слава Україні! Окупанти – геть!</h2>
            </div>
            <hr/>
            <div className="cars">
                <SearchCars/>
            </div>
            <div className="cars">
                <img className="cars-ads" src="https://css.riastatic.com/images/ukr/dopomoga.png" alt="Help Ukraine"/>
            </div>
            <div className="cars">
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
                <div className="cars top-cars">
                    <TopVisibleCar />
                </div>
            </div>
        </>
    );
};

export default Cars;
