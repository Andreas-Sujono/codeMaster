import React, {Component} from 'react'

import {Link} from 'react-router-dom'
import './style.scss'
import logo from 'assets/logo.png'
import TocIcon from '@material-ui/icons/Toc';

import { Link as ScrollLink} from 'react-scroll'

class TopNav extends Component{

    render(){
        const style = {
            backgroundColor:this.props.backgroundColor
        }
        const navList = [{title:'Home', path:'/', smoothScroll:{isTrue:false}, isLink:false},
                        {title:'Get Started', path:'/',smoothScroll:{isTrue:true,to:'subscription'}, isLink:false },
                        {title:'Docs', path:'/docs',smoothScroll:{isTrue:false}, isLink:false},
                        {title:'Github',link:"https://github.com/Andreas-Sujono/codeMaster" ,smoothScroll:{isTrue:false}, isLink:true },
                        {title:'Contact', path:'/', smoothScroll:{isTrue:true,to:'footer'}, isLink:false}
                    ]

        return (
            <div class="topNav fluid-container row" style={style}> 
                <div class="leftContent col-4">
                    <img src={logo} />
                </div>

                <div class="rightContent col">
                    <ul>
                        {
                        navList.map( item => (
                            <li className="collapseIndividual"> 
                                {
                                item.smoothScroll.isTrue ?  
                                <ScrollLink
                                    activeClass="active"
                                    to={item.smoothScroll.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-40}
                                    duration= {500}
                                >
                                    {item.title}
                                </ScrollLink>
                                :
                                item.isLink ? 
                                <a href={item.link} target="_blank"> 
                                    {item.title} 
                                </a>:
                                <Link to={item.path}> 
                                    {item.title} 
                                </Link>
                                }
                                
                            </li>
                        ))
                        }
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