import React, { Component } from 'react';
import './style.scss'

class ParticleAnimation extends Component {

    createParticle = () => {
        let arr = []
        for(var i = 0; i<this.props.particle; i++){
            arr.push(<div className={`x${i} particle`}></div>)
        }
        return arr
    }

    render() {
        const {particle,color} = this.props

        return (
            <div className="particleAnimation">
                {this.createParticle()}
            </div>
        );
    }
}
ParticleAnimation.defaultProps={
    particle:10,
    color:'lighgrey'
}

export default ParticleAnimation;