import React from 'react'
import './style.scss'
import andreas from 'assets/Andreas.jpg'
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';

const contributor = [{
    name:'Andreas Sujono',
    image:andreas,
    role:'Lear front-end Developer',
    detail:'A sophomore in NTU studying Electrical and Electronic Engineering. \
    Have a really great passion for developing innovative programs. \
    Experienced in well-versed technology and writing code that are reliable and user-friendly.'
}]

const Contributors = (props) => {

    return(
        <div className="contributors">
            <LightSpeed top>
            <h1> contributors </h1>
            </LightSpeed>

            
            <div className="container">
                {contributor.map( individual => (
                    <div className="individual"> 
                        <Fade top><img src={individual.image} /></Fade>
                        <LightSpeed top>
                        <div className="name"> {individual.name} </div>
                        <div className="role"> <i>{individual.role}</i> </div>
                        <div className="detail"> {individual.detail} </div>
                        </LightSpeed>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contributors