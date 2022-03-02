import React from 'react';
import {Link} from 'react-router-dom'
import './cars.scss'

const Cars = () => {
    return (
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

    );
};

export default Cars;
