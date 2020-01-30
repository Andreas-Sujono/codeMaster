import React from 'react'
import './style.scss'

const Card = (props) => {
    const {title, img, textList, button} = props;

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

                <button>{button}</button>
        </div>
    )
}

export default Card