import React, {useState} from 'react';
import './search-cars.scss'
import {BsCheckLg} from 'react-icons/bs'
import {Link} from "react-router-dom";

const SearchCars = () => {
    const optionsType: { label: string}[] = [
        {label: 'Будь-які'},
        {label: 'Легкові'},
        {label: 'Мото'},
        {label: 'Вантажівки'},
        {label: 'Причепи'},
        {label: 'Спецтехніка'},
        {label: 'Сільгосптехніка'},
        {label: 'Автобуси'},
        {label: 'Водний транспорт'},
        {label: 'Повітряний транспорт'},
        {label: 'Автобудинки'}
    ];

    const regions: string[] = ['Регіон', 'Київ', 'Вінниця', 'Дніпро', 'Донецька обл.', 'Житомир', 'Запоріжжя', 'Івано-Франківськ', 'Луганська обл.', 'Луцьк', 'Львів', 'Миколаїв', ' Одеса', 'Полтава', 'Рівне', 'Суми', 'Тернопіль', 'Ужгород', 'Харків', 'Херсон', 'Хмельницький', 'Черкаси', 'Чернівці', 'Чернігів']

    // Create years
    let prevYears: string[] = []
    let nextYears: string[] = []
    for (let i = 1900; i <= 2022; i++) {
        prevYears.push('' + i)
        nextYears.push('' + i)
    }
    nextYears.reverse()
    nextYears.unshift('до')
    prevYears.reverse()
    prevYears.unshift('від')



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
        return brands.indexOf(item) === pos;
    })


    const [inputCheck, setInputCheck] = useState<string>('Всі')
    const [valueType, setValueType] = useState<string>('Легкові')
    const [brand, setBrand] = useState<string>('Марка')
    const [models, setModels] = useState<{ brand: string, model: string }[]>(allCarsAndBrands)
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
            setModels(allCarsAndBrands.filter(brand => event.target.value === brand.brand))
        } else {
            setModel('Модель')
            setModels(allCarsAndBrands)
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
                            return <option key={option.model} value={option.model}>{option.model}</option>
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
                        <Link to="/"><span><img src="./images/lupa.svg" alt="Lupa"/></span>Пошук</Link>
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
