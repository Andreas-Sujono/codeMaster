import React, { Component } from 'react';
import TopNav from 'shared/components/TopNav'
import CollapsableNav from 'shared/components/CollapsableNav'
import Subscription from 'desktop/components/Subscription'
import Services from 'desktop/components/Services'
import Contributors from 'desktop/components/Contributors'
import Footer from 'desktop/components/Footer'
import BackgroundImage from 'assets/backgroundImage.jpg'

import LightSpeed from 'react-reveal/LightSpeed';
import { Link as ScrollLink} from 'react-scroll'

import './style.scss'
import  'responsive/medium.scss'
import  'responsive/small.scss'


class Homepage extends Component {
    state = {
        collapse:true,
        collapseClass:'hidden'
    }

    handleCollapse = () => {
        console.log('clicked')
        this.setState( prevState =>({
            collapse:!prevState.collapse,
            collapseClass:prevState.collapseClass == 'hidden'?'show':'hidden'
        })
        
        )
    }

    render() {
        const style={
            backgroundImage:`url(${BackgroundImage})`,
        }
        return (
            <div class="homepage" >
                <div class="firstPage" style={style}>
                    <TopNav handleCollapse={this.handleCollapse.bind(this)}/>
                    <CollapsableNav collapse={this.state.collapse} collapseClass={this.state.collapseClass}/>
                    
                    <LightSpeed left>
                    <header>
                        <h1> {"< Code"}<span>Master</span>{"/>"}</h1>
                        <div class="subheading">
                            Coding Never feel so easy
                        </div>
                    </header>
                    </LightSpeed>

                    
                    <div class="getStartedButton">
                        <ScrollLink
                                activeClass="active"
                                to="subscription"
                                spy={true}
                                smooth={true}
                                offset={-40}
                                duration= {500}
                            >                            
                            <button><LightSpeed left>Get Started</LightSpeed></button>
                        </ScrollLink>
                    </div>
                </div>

                <Subscription/>
                <Services/>

                <hr style={{width:'80%'}}/>

                <Contributors/>
                <Footer/>
            </div>
        );
    }
}
export default Homepage;


