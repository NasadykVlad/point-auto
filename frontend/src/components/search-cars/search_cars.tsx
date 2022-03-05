import React, {useState} from 'react';
import './search-cars.scss'
import {BsCheckLg} from 'react-icons/bs'

const SearchCars = () => {
    const [inputCheck, setInputCheck] = useState('Всі')

    return (
        <div className="SearchCars">
            <div className="search">
                <div className="search_left">
                    <div className="type_cars">
                        <input type="radio" id="allRadioType" value="Всі" name="type" checked={inputCheck === 'Всі'} onChange={() => setInputCheck('Всі')}/>
                        <label htmlFor="allRadioType"><span><BsCheckLg /></span> Всі</label>
                        <input type="radio" id="allRadioType2" value="Вживані" name="type" checked={inputCheck === 'Вживані'} onChange={() => setInputCheck('Вживані')}/>
                        <label htmlFor="allRadioType2"><span><BsCheckLg /></span> Вживані</label>
                        <input type="radio" id="allRadioType3" value="Нові" name="type" checked={inputCheck === 'Нові'} onChange={() => setInputCheck('Нові')}/>
                        <label htmlFor="allRadioType3"><span><BsCheckLg /></span> Нові</label>
                        <input type="radio" id="allRadioType4" value="Під пригон" name="type" checked={inputCheck === 'Під пригон'} onChange={() => setInputCheck('Під пригон')}/>
                        <label htmlFor="allRadioType4"><span><BsCheckLg /></span> Під пригон</label>
                    </div>
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
