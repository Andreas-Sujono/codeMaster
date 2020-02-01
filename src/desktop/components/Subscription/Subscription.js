import React, {Component} from 'react'
import './style.scss'
import subscription1 from 'assets/subscription1.png'
import subscription2 from 'assets/subscription2.png'
import midDivider from 'assets/midDivider.png'

import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';

import Card from 'shared/components/Card'
class Subscription extends Component{
    
    constructor(){
        super()
        this.imageRef = React.createRef()

    }
    state={
        animationClass:""
    }

    handleAnimationOnScroll = () => {
        const imagePosY = this.imageRef.current.clientHeight + 500
        if(window.scrollY >= imagePosY){
            this.setState({animationClass:"startAnimation"})
        }
    }
    componentDidMount(){
        console.log(this.imageRef)
        window.addEventListener('scroll', this.handleAnimationOnScroll)
        
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleAnimationOnScroll)
    }
    
    render(){
        
        return (
            <div class="subscription" name="subscription">
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

                <div className="imageContainer" ref={this.imageRef}>
                    <img src={midDivider} className={"midDivider " + this.state.animationClass} />
                </div>
                
                
            </div>
        )
    }
}

export default Subscription