import React, {FC} from 'react';
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";

interface OtherCarOnSearchProps {
    car: {
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
        vin_code_car: string,
        year: number
    };
}

const OtherCarOnSearch:FC<OtherCarOnSearchProps> = ({car}) => {

    const changeVisibleText = (id: number) => {
        let text: any = document.querySelector(`.desc${id}`)
        text.style.whiteSpace = 'pre-wrap'
        text.style.overflow = 'visible'
    }

    return (
        <div className="car" key={car.id}>
            <div className="photo">
                <Link to="/"><img src={car.photos[0]} alt="photo-car"/></Link>
            </div>
            <div className="info">
                <Link to="/">{car.brand} {car.model} {car.year}</Link>
                <div className="prices">
                    <p className="price-dollars"><NumberFormat className="price" value={+car.price}
                                                               displayType={'text'}
                                                               thousandSeparator={' '}/> <span
                        className="price">$</span></p>
                    <p className="price-ua"><NumberFormat value={car.price * 29.50} displayType={'text'}
                                                          thousandSeparator={' '}/> <span> грн</span></p>
                </div>
                <div className="info_main">
                    <div className="top">
                                <span>
                                    <img src="./images/run.svg" alt=""/>
                                    {car.run > 100000 ? String(car.run).slice(0, 3) + ' тис. км' :
                                        car.run < 100000 ? String(car.run).slice(0, 2) + ' тис. км' : ''}</span>
                        <br/>
                        <span><img src="./images/full.svg" alt=""/>{car.engine_type}</span>
                    </div>
                    <div className="bot">
                        <span><img src="./images/location.svg" alt=""/>{car.region}</span><br/>
                        {car.transmission === false ?
                            <span><img src="./images/transmission.svg" alt=""/>Ручна / Механіка</span> :
                            <span><img src="./images/transmission.svg" alt=""/>Автомат</span>}
                    </div>
                </div>
                <div className="numbers">
                    {car.state_number ?
                        <p className="state_number">{car.state_number.slice(0, 2)} {car.state_number.slice(2, 6)} {car.state_number.slice(6, 8)}</p> : ''}
                    {car.vin_code_car ? <p className="vin">
                        <img src="./images/vin-check-blue.svg" alt="Vin check"/>
                        {car.vin_code_car}</p> : ''}
                </div>
                <p className={`desc desc${car.id}`} onClick={() => changeVisibleText(car.id)}>{car.desc}</p>
                <p className="date">
                    <img src="./images/clock.svg" alt=""/>
                    {car.dc.slice(8, 10)}.{car.dc.slice(5, 7)}.{car.dc.slice(0, 4)}
                </p>
            </div>
        </div>
    );
};

export default OtherCarOnSearch;
