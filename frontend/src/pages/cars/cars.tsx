import React from 'react';
import {Link} from 'react-router-dom'
import './cars.scss'
import SearchCars from "../../components/search-cars/search_cars";
import TopVisibleCar from "../../components/TopVisibleCar/TopVisibleCar";
import LastSearchCars from "../../components/lastSearchCars/lastSearchCars";

const Cars: React.FC = () => {
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
                <LastSearchCars />
                <div className="cars top-cars">
                    <TopVisibleCar />
                </div>
            </div>
        </>
    );
};

export default Cars;
