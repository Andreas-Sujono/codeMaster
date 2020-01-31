import React, { Component } from 'react';
import TopNav from 'shared/components/TopNav'
import CollapsableNav from 'shared/components/CollapsableNav'
import Subscription from 'desktop/components/Subscription'
import Services from 'desktop/components/Services'
import Contributors from 'desktop/components/Contributors'
import Footer from 'desktop/components/Footer'

import LightSpeed from 'react-reveal/LightSpeed';

import './style.scss'
import  'responsive/medium.scss'
import  'responsive/small.scss'


class Homepage extends Component {
    state = {
        collapse:false,
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
        return (
            <div class="homepage">
                <div class="firstPage">
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


