import React, {Component} from 'react'

import './style.scss'
import logo from 'assets/logo.png'
import TocIcon from '@material-ui/icons/Toc';

class TopNav extends Component{
    render(){
        return (
            <div class="topNav fluid-container row"> 
                <div class="leftContent col-4">
                    <img src={logo} />
                </div>

                <div class="rightContent col">
                    <ul>
                        <li> <a href="#"> Home </a></li>
                        <li> <a href="#">Get Started</a></li>
                        <li> <a href="#">Docs</a></li>
                        <li> <a href="#">Github</a></li>
                        <li> <a href="#">Contact</a></li>
                    </ul> 
                </div>

                <div class="collapsableIcon col">
                    <div class="collapseIcon" > <TocIcon fontSize="large" onClick={ this.props.handleCollapse }/> </div>
                </div>
            </div>
        );   
    }
}

export default TopNav