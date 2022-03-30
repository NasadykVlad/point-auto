import React from 'react';
import './cars.scss'
import SearchCars from "../../components/search-cars/search_cars";
import TopVisibleCar from "../../components/TopVisibleCar/TopVisibleCar";
import LastSearchCars from "../../components/lastSearchCars/lastSearchCars";
import TopNavBarOnCars from "../../components/topNavBarOnCars/topNavBarOnCars";

const Cars: React.FC = () => {
    return (
        <>
            <div className="cars">
                <TopNavBarOnCars/>
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
                <LastSearchCars/>
                <div className="cars top-cars">
                    <TopVisibleCar/>
                </div>
            </div>
        </>
    );
};

export default Cars;
