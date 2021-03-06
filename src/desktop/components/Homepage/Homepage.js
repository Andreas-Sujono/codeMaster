import React, { Component } from 'react';
import TopNav from 'shared/components/TopNav'
import CollapsableNav from 'shared/components/CollapsableNav'
import Subscription from 'desktop/components/Subscription'
import Services from 'desktop/components/Services'
import Contributors from 'desktop/components/Contributors'
import Footer from 'desktop/components/Footer'
import BackgroundImage from 'assets/backgroundImage.jpg'
import ParticleAnimation from 'shared/components/ParticleAnimation'

import LightSpeed from 'react-reveal/LightSpeed';
import { Link as ScrollLink} from 'react-scroll'

import './style.scss'
import  'responsive/medium.scss'
import  'responsive/small.scss'


class Homepage extends Component {

    render() {
        const style={
            backgroundImage:`url(${BackgroundImage})`,
        }
        return (
            <div class="homepage" >
                <div class="firstPage" style={style}>
                    <TopNav/>
                    <ParticleAnimation/>
                    
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


