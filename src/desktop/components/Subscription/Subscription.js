import React, {Component} from 'react'
import './style.scss'
import subscription1 from 'assets/subscription1.png'
import subscription2 from 'assets/subscription2.png'
import midDivider from 'assets/midDivider.png'

import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';

import Card from 'shared/components/Card'
class Subscription extends Component{

    state={
        animationClass:""
    }
    handleAnimationOnScroll = () => {
        let imagePosY = this.refs.imageMid.clientHeight + 200
        if(window.scrollY >= imagePosY){
            this.setState({animationClass:"startAnimation"})
            window.removeEventListener('scroll', this.handleAnimationOnScroll)
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleAnimationOnScroll)
        
    }
    
    render(){
        return (
            <div class="subscription">
                <div class="topHeader">
                    <LightSpeed top>
                    <h1>Subscription</h1>
                    </LightSpeed>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <Zoom top>
                            <Card title="Basic" img={subscription1} button="Free" textList={['Get all the list of syntax of front-end Back end, machine learning, and basic of computer science']}/>
                            </Zoom>
                        </div>

                        <div class="col-md-6 col-12">
                            <Zoom top>
                            <Card title="Pro" img={subscription2} button="Soon" textList={['All benefits of Basic','Get access to online assessment','Get access to Tutorial Videos']}/>
                            </Zoom>
                        </div>
                    </div> 
                </div>

                <div className="imageContainer" ref="imageMid">
                    <img src={midDivider} className={"midDivider " + this.state.animationClass} />
                </div>
                
                
            </div>
        )
    }
}

export default Subscription