import React, {useState} from 'react';
import "./GlobalSearchCar.scss"
import TopNavBarOnCars from "../../components/topNavBarOnCars/topNavBarOnCars";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {GrFormClose} from 'react-icons/gr'
import {Link} from "react-router-dom";


const GlobalSearchCar: React.FC = () => {
    const breadcrumbs = useBreadcrumbs();

    const [tags, setTags] = useState([
        {
            id: 1,
            name: 'Легкові'
        },
        {
            id: 2,
            name: 'Розмитнені'
        },
        {
            id: 3,
            name: 'Авто в Україні'
        },
    ])

    const deleteTag = (tag: number) => {
        setTags(tags.filter(value => value.id !== tag))
    }

    return (
        <>
            <div className="GlobalSearchCar-top">
                <TopNavBarOnCars/>
                <h2 className="sayUkraine">русскій воєнний корабль - ІДІ НАХ#Й!</h2>
            </div>
            <hr/>
            <div className="GlobalSearchCar-middle">
                {breadcrumbs.map(({
                                      match,
                                      breadcrumb
                                  }) => (
                    <span key={match.pathname}>
                        {match.pathname == '/' ?
                            <Link className="breadcums breadcums-passive" to={match.pathname}>AUTO.RIA.com</Link> :
                            match.pathname === '/global-search' ?
                                <Link className="breadcums breadcums-active" to={match.pathname}>Легкові</Link> : ''}
                    </span>
                ))}
                <h4>Продаж Легкових Бандермобілів</h4>
                <p className="statistic"><p style={{'fontWeight': 'bold', 'display': 'inline'}}>81
                    481</p> пропозиція <span>за годину <Link to="/" className="active-numb">+ 267</Link></span> <span>за день <Link
                    to="/" className="active-numb">+ 1597</Link></span></p>
                <div className="search-tags">
                    <div>
                        {tags.length > 0 ?
                            tags.map(tag => {
                                return <p className="tag" key={tag.name}><span>{tag.name}</span><GrFormClose
                                    onClick={() => deleteTag(tag.id)}/></p>
                            })
                            : <p style={{'background': 'none', 'color': 'grey'}}>Пошук</p>}
                    </div>
                    <Link to='/'>Уточнити пошук</Link>
                </div>
            </div>
        </>
    );
};

export default GlobalSearchCar;
