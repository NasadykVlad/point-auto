import React, {useEffect} from 'react';
import './topVisibleCar.scss'
import {usedTypedSelector} from "../../hooks/usedTypedSelector";
import {useActions} from "../../hooks/useActions";

const TopVisibleCar: React.FC = () => {

    const {fetchCars} = useActions()

    useEffect(() => {
        fetchCars()
    }, [])

    const {cars} = usedTypedSelector(state => state.topCars)


    // func for shuffle array random value
    function shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const randomTopCar = Math.floor((Math.random() * (cars.length)))
    const visiableTopCars = [...cars];
    visiableTopCars.splice(randomTopCar, 1)
    shuffleArray(visiableTopCars)
    const fourTopCars = visiableTopCars.filter(car => car.top_car).slice(0, 4)

    return (
        <>
            {
                cars.length > 0 ?
                    <>
                        <a className="left-block" href="###">
                            <img src={cars[randomTopCar].photos[0]} alt=""/>
                            <p>{cars[randomTopCar].brand} {cars[randomTopCar].model} {cars[randomTopCar].year}</p>
                            <span>
                                {cars[randomTopCar].price.length > 4 ?
                                    <span
                                        className="price">{cars[randomTopCar].price.slice(0, 2)} {cars[randomTopCar].price.slice(2, cars[randomTopCar].price.length)} $</span> :
                                    <span
                                        className="price">{cars[randomTopCar].price.slice(0, 1)} {cars[randomTopCar].price.slice(1, cars[randomTopCar].price.length)} $</span>}
                                <span
                                    className="run dot">{cars[randomTopCar].run > 100000 ? String(cars[randomTopCar].run).slice(0, 3) + ' тис. км' :
                                    cars[randomTopCar].run < 100000 ? String(cars[randomTopCar].run).slice(0, 2) + ' тис. км' : ''}
                    </span>
                    <span className="region dot"> {cars[randomTopCar].region}</span>
                </span>
                        </a>
                        <div className="right-block">
                            <div className="box">
                                <a href="###">
                                    <img src={fourTopCars[0].photos[0]} alt=""/>
                                    <p>{fourTopCars[0].brand} {fourTopCars[0].model} {fourTopCars[0].year}</p>
                                    <span>
                                           {fourTopCars[0].price.length > 4 ?
                                               <span
                                                   className="price">{fourTopCars[0].price.slice(0, 2)} {fourTopCars[0].price.slice(2, fourTopCars[0].price.length)} $</span> :
                                               <span
                                                   className="price">{fourTopCars[0].price.slice(0, 1)} {fourTopCars[0].price.slice(1, fourTopCars[0].price.length)} $</span>}
                                        <span
                                            className="run dot">{fourTopCars[0].run > 100000 ? String(fourTopCars[0].run).slice(0, 3) + ' тис. км' :
                                            fourTopCars[0].run < 100000 ? String(fourTopCars[0].run).slice(0, 2) + ' тис. км' : ''}
                            </span>
                        </span>
                                </a>
                                <a href="###">
                                    <img src={fourTopCars[1].photos[0]} alt=""/>
                                    <p>{fourTopCars[1].brand} {fourTopCars[1].model} {fourTopCars[1].year}</p>
                                    <span>
                             {fourTopCars[1].price.length > 4 ?
                                 <span
                                     className="price">{fourTopCars[1].price.slice(0, 2)} {fourTopCars[1].price.slice(2, fourTopCars[1].price.length)} $</span> :
                                 <span
                                     className="price">{fourTopCars[1].price.slice(0, 1)} {fourTopCars[1].price.slice(1, fourTopCars[1].price.length)} $</span>}
                                        <span
                                            className="run dot">{fourTopCars[1].run > 100000 ? String(fourTopCars[1].run).slice(0, 3) + ' тис. км' :
                                            fourTopCars[1].run < 100000 ? String(fourTopCars[1].run).slice(0, 2) + ' тис. км' : ''}
                            </span>
                        </span>
                                </a>
                            </div>
                            <div className="box">
                                <a href="###">
                                    <img src={fourTopCars[2].photos[0]} alt=""/>
                                    <p>{fourTopCars[2].brand} {fourTopCars[2].model} {fourTopCars[2].year}</p>
                                    <span>
                             {fourTopCars[2].price.length > 4 ?
                                 <span
                                     className="price">{fourTopCars[2].price.slice(0, 2)} {fourTopCars[2].price.slice(2, fourTopCars[2].price.length)} $</span> :
                                 <span
                                     className="price">{fourTopCars[2].price.slice(0, 1)} {fourTopCars[2].price.slice(1, fourTopCars[2].price.length)} $</span>}
                                        <span
                                            className="run dot">{fourTopCars[2].run > 100000 ? String(fourTopCars[2].run).slice(0, 3) + ' тис. км' :
                                            fourTopCars[2].run < 100000 ? String(fourTopCars[2].run).slice(0, 2) + ' тис. км' : ''}
                            </span>
                        </span>
                                </a>
                                <a href="###">
                                    <img src={fourTopCars[3].photos[0]} alt=""/>
                                    <p>{fourTopCars[3].brand} {fourTopCars[3].model} {fourTopCars[3].year}</p>
                                    <span>
                            {fourTopCars[3].price.length > 4 ?
                                <span
                                    className="price">{fourTopCars[3].price.slice(0, 2)} {fourTopCars[3].price.slice(2, fourTopCars[3].price.length)} $</span> :
                                <span
                                    className="price">{fourTopCars[3].price.slice(0, 1)} {fourTopCars[3].price.slice(1, fourTopCars[3].price.length)} $</span>}
                                        <span
                                            className="run dot">{fourTopCars[3].run > 100000 ? String(fourTopCars[3].run).slice(0, 3) + ' тис. км' :
                                            fourTopCars[3].run < 100000 ? String(fourTopCars[3].run).slice(0, 2) + ' тис. км' : ''}
                            </span>
                        </span>
                                </a>
                            </div>
                        </div>
                    </> : ''}
        </>
    )
};

export default TopVisibleCar;
