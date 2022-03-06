import React, {useState} from 'react';
import './search-cars.scss'
import {BsCheckLg} from 'react-icons/bs'
import {Link} from "react-router-dom";

const SearchCars = () => {
    const optionsType: {label: string, value: string}[] = [
        {label: 'Будь-які', value: 'any'},
        {label: 'Легкові', value: 'lehkovi'},
        {label: 'Мото', value: 'moto'},
        {label: 'Вантажівки', value: 'vantagivky'},
        {label: 'Причепи', value: 'prycepy'},
        {label: 'Спецтехніка', value: 'spectehnika'},
        {label: 'Сільгосптехніка', value: 'siltehnika'},
        {label: 'Автобуси', value: 'avtobusy'},
        {label: 'Водний транспорт', value: 'vodnyi'},
        {label: 'Повітряний транспорт', value: 'air'},
        {label: 'Автобудинки', value: 'auto-house'}
    ];

    let classNamePlaceholderOption: string = '';

    let allCarsAndBrands = [
        {
            "brand": "Марка",
            "model": "Модель"
        },
        {
            "brand": "Hyundai",
            "model": "Matrix"
        },
        {
            "brand": "Hyundai",
            "model": "Maxcruz"
        },
        {
            "brand": "Hyundai",
            "model": "Palisade"
        },
        {
            "brand": "Hyundai",
            "model": "Pony"
        },
        {
            "brand": "Hyundai",
            "model": "Santa Cruz"
        },
        {
            "brand": "Hyundai",
            "model": "Santa Fe"
        },
        {
            "brand": "Hyundai",
            "model": "Santamo"
        },
        {
            "brand": "Hyundai",
            "model": "Scoupe"
        },
        {
            "brand": "Mazda",
            "model": "6"
        },
        {
            "brand": "Mazda",
            "model": "CX-7"
        }]

    let brands = allCarsAndBrands.map(car => {
        return car.brand
    })

    brands = brands.filter(function (item: any, pos) {
        return brands.indexOf(item) == pos;
    })


    const [inputCheck, setInputCheck] = useState('Всі')
    const [valueType, setValueType] = useState('any')
    const [brand, setBrand] = useState('Марка')
    const [models, setModels] = useState(allCarsAndBrands)
    const [model, setModel] = useState('Модель')

    const handleChangeType = (event: any) => {
        setValueType(event.target.value);
    };

    const handleChangeTypeCars = (event: any) => {
        setInputCheck(event.target.value)
    }

    const handleChangeBrand = (event: any) => {
        setBrand(event.target.value)

        if (event.target.value !== 'Марка') {
            setModels(allCarsAndBrands.filter(brand => event.target.value === brand.brand))
        } else {
            setModel('Модель')
            setModels(allCarsAndBrands)
        }
    }

    const handleChangeModelsCars = (event: any) => {
        setModel(event.target.value)
    }

    if (brand === 'Марка' || brand === 'Модель') {
        classNamePlaceholderOption = 'grey'
    }

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
                            return <option key={option.value} value={option.value}>{option.label}</option>
                        })}
                    </select>

                    <select id="brands" value={brand} className={classNamePlaceholderOption}
                            onChange={handleChangeBrand}>
                        {brands.map(option => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                    </select>

                    <select id="models" value={model} className={classNamePlaceholderOption}
                            onChange={handleChangeModelsCars}>
                        {models.map(option => {
                            return <option key={option.model} value={option.model}>{option.model}</option>
                        })}
                    </select>

                    <Link to="/">Розширений пошук</Link>

                </div>
                <div className="search_right">

                </div>
            </div>
            <div className="ads">
                <img src="./images/ads.png" alt="ads"/>
            </div>
        </div>
    );
};

export default SearchCars;
