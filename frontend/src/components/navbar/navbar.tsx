import React from 'react'
import './navbar.scss'
import i18n from "../../i18n";
import {IoIosNotificationsOutline, IoMdHeartEmpty} from 'react-icons/io'
import {Link} from 'react-router-dom'


const NavBars = () => {
    function changeLanguage(lng: string) {
        if (lng) {
            i18n.changeLanguage(lng);
        }
    }

    return (<nav className="nav">
        <ul>
            <li><Link to="/ria">RIA.com</Link></li>
            <li><Link to="/">Автомобілі</Link></li>
            <li><Link to="/real-estate">Нерухомість</Link></li>
            <li><Link to="/auto-products">Автотовари</Link></li>
            <li><Link to="/auto-parts">Автозапчастини</Link></li>
        </ul>
        <ul>
            <li><Link to="/favourite"><IoMdHeartEmpty/></Link></li>
            <li><Link to="/notification"><IoIosNotificationsOutline/></Link></li>
            <li><Link className="nav_login" to="/login"> <img src="./images/face.png" alt="face"/> <span>Увійти в кабінет</span></Link></li>
            <li className="nav_switchLang"><span>Рус</span><span>Укр</span></li>
        </ul>
    </nav>);
};

export default NavBars;
