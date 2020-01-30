import React, { Component } from 'react';
import SideNav from 'shared/components/SideNav'

import './style.scss'

class Homepage extends Component {
    render() {
        return (
            <div class="homepage">
                <SideNav/>

                <header>
                    <h1> Theory of Coding </h1>
                    <h3> by Andreas Sujono </h3>
                    <h5> click here to continue</h5>
                </header>
                
            </div>
        );
    }
}
export default Homepage;


