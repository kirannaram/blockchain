import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = (props) => {
    const liList = props.list;
    const navList = liList.map((item, index) => {
        return(
        <li key={index} className="nav__item"><Link to={item.link} className="nav__item--link">{item.value}</Link></li>
        )
    })
    return(
        <ul className="nav">
           {navList}
        </ul>
    )
}

export default Navigation;