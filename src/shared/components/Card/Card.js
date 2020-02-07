import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

const Card = (props) => {
    const {title, img, textList, button,link} = props;

    return (
        <div className="card" >
            <div className="topHeader">
                <h1>{title}</h1>
                <hr/>
            </div>
            <img src={img} />

            <div className="cardContent">
                {textList.map ( item => (
                    <div key={item}>{item}</div>
                ))}
            </div>

                <button><Link to={link}>{button}</Link></button>
        </div>
    )
}

export default Card