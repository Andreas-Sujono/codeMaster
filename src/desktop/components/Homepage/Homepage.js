import React, { Component } from 'react';
import TopNav from 'shared/components/TopNav'
import Subscription from 'desktop/components/Subscription'
import Services from 'desktop/components/Services'
import Contributors from 'desktop/components/Contributors'
import Footer from 'desktop/components/Footer'

import LightSpeed from 'react-reveal/LightSpeed';

import './style.scss'

class Homepage extends Component {
    render() {
        return (
            <div class="homepage">
                <div class="firstPage">
                    <TopNav/>
                    
                    <LightSpeed left>
                    <header>
                        <h1> {"< Code"}<span>Master</span>{"/>"}</h1>
                        <div class="subheading">
                            Coding Never feel so easy
                        </div>
                    </header>
                    </LightSpeed>

                    
                    <div class="getStartedButton">
                        <button><LightSpeed left>Get Started</LightSpeed></button>
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


