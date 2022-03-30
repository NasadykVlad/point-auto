import React, {useState} from 'react';
import './search-cars.scss'
import {BsCheckLg} from 'react-icons/bs'
import {Link} from "react-router-dom";
import axios from 'axios'
import {brands, regions, optionsType, prevYears, nextYears} from "../../data/carsPage"

const SearchCars: React.FC = () => {
    const [inputCheck, setInputCheck] = useState<string>('Всі')
    const [valueType, setValueType] = useState<string>('Легкові')
    const [brand, setBrand] = useState<string>('Марка')
    const [models, setModels] = useState(['Модель'])
    const [model, setModel] = useState<string>('Модель')
    const [VIN, setVIN] = useState<boolean>(false)
    const [region, setRegion] = useState<string>('Регіон')
    const [prevYear, setPrevYear] = useState<string>('від')
    const [nextYear, setNextYear] = useState<string>('до')
    const [prevPrice, setPrevPrice] = useState<string>('')
    const [nextPrice, setNextPrice] = useState<string>('')

    const handleChangeType = (event: any) => {
        setValueType(event.target.value);
    };

    const handleChangeTypeCars = (event: any) => {
        setInputCheck(event.target.value)
    }

    const handleChangeBrand = (event: any) => {
        setBrand(event.target.value)

        if (event.target.value !== 'Марка') {
            axios.post('http://localhost:5001/api/cars/getModels', {
                brand: event.target.value
            })
                .then(res => {
                    if (res.data.models.length > 0) {
                        setModels(res.data.models)
                    }
                })

        } else {
            setModel('Модель')
            setModels(['Модель'])
        }
    }

    const handleChangeModelsCars = (event: any) => {
        setModel(event.target.value)
    }

    const handleChangeVin = (event: any) => {
        setVIN(!VIN);
    };

    const handleChangeRegion = (event: any) => {
        setRegion(event.target.value);
    };

    const handleChangePrevYears = (event: any) => {
        setPrevYear(event.target.value);
    };

    const handleChangeNextYears = (event: any) => {
        setNextYear(event.target.value);
    };

    const handleChangePrevPrice = (event: any) => {
        setPrevPrice(event.target.value);
    };

    const handleChangeNextPrice = (event: any) => {
        setNextPrice(event.target.value);
    };

    return (
        <div className="SearchCars">
            <div className="search">
                <div className="search_left">
                    <div className="type_cars" onChange={handleChangeTypeCars}>
                        <input type="radio" id="allRadioType" value="Всі" name="type" checked={inputCheck === 'Всі'}/>
                        <label htmlFor="allRadioType"><span><BsCheckLg/></span> Всі</label>
                        <input type="radio" id="allRadioType2" value="Вживані" name="type"
                               checked={inputCheck === 'Вживані'}/>
                        <label htmlFor="allRadioType2"><span><BsCheckLg/></span> Вживані</label>
                        <input type="radio" id="allRadioType3" value="Нові" name="type"
                               checked={inputCheck === 'Нові'}/>
                        <label htmlFor="allRadioType3"><span><BsCheckLg/></span> Нові</label>
                        <input type="radio" id="allRadioType4" value="Під пригон" name="type"
                               checked={inputCheck === 'Під пригон'}/>
                        <label htmlFor="allRadioType4"><span><BsCheckLg/></span> Під пригон</label>
                    </div>

                    <select value={valueType} onChange={handleChangeType}>
                        {optionsType.map(option => {
                            return <option key={option.label} value={option.label}>{option.label}</option>
                        })}
                    </select>

                    <select id="brands" value={brand} className={brand === 'Марка' ? 'grey' : ''}
                            onChange={handleChangeBrand}>
                        {brands.map(option => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                    </select>

                    <select id="models" value={model} className={model === 'Модель' ? 'grey' : ''}
                            onChange={handleChangeModelsCars}>
                        {models.map(option => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                    </select>

                    <Link to="/">Розширений пошук</Link>

                </div>
                <div className="search_right">
                    <div className="check_vin">
                        <p><span><img src="./images/VIN-icon.svg" alt="Vin Icon"/></span>Перевірений VIN</p>
                        <input style={{'display': 'none'}} type="checkbox" id="VIN" checked={VIN}
                               onChange={handleChangeVin}/>
                        <label htmlFor="VIN"></label>
                    </div>

                    <div className="region">
                        <span>Регіон</span>
                        <select value={region} onChange={handleChangeRegion}
                                className={region === 'Регіон' ? 'grey' : ''}>
                            {regions.map(region => {
                                return <option key={region} value={region}>{region}</option>
                            })}
                        </select>
                    </div>

                    <div className="year">
                        <span>Рік</span>
                        <div>
                            <select value={prevYear} onChange={handleChangePrevYears}
                                    className={prevYear === 'від' ? 'grey' : ''}>
                                {prevYears.map(year => {
                                    return <option key={year} value={year}>{year}</option>
                                })}
                            </select>

                            <select value={nextYear} onChange={handleChangeNextYears}
                                    className={nextYear === 'до' ? 'grey' : ''}>
                                {nextYears.map(year => {
                                    return <option key={year} value={year}>{year}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="price">
                        <span>Ціна, $</span>
                        <input type="text" value={prevPrice} placeholder="від" onChange={handleChangePrevPrice}/>
                        <input type="text" value={nextPrice}  placeholder="до" onChange={handleChangeNextPrice}/>
                    </div>

                    <div className="rightSearch">
                        <Link to="/global-search"><span><img src="./images/lupa.svg" alt="Lupa"/></span>Пошук</Link>
                    </div>

                </div>
            </div>
            <div className="ads">
                <img src="./images/ads.png" alt="ads"/>
            </div>
        </div>
    );
};

export default SearchCars;
