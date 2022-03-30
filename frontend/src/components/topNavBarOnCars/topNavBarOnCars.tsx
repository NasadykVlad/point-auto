import React from 'react';
import {Link} from "react-router-dom";
import './topNavBarOnCars.scss';

const TopNavBarOnCars: React.FC = () => {
    return (
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
    );
};

export default TopNavBarOnCars;
