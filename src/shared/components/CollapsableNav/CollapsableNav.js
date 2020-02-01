import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'
import './style.scss'

class CollapsableNav extends Component {

    render() {
        const navList = [{title:'Home', path:'/', smoothScroll:{isTrue:false}, isLink:false},
                        {title:'Get Started', path:'/',smoothScroll:{isTrue:true,to:'subscription'}, isLink:false },
                        {title:'Docs', path:'/docs',smoothScroll:{isTrue:false}, isLink:false},
                        {title:'Github',link:"https://github.com/Andreas-Sujono/codeMaster" ,smoothScroll:{isTrue:false}, isLink:true },
                        {title:'Contact', path:'/', smoothScroll:{isTrue:true,to:'footer'}, isLink:false}
                    ]
        return (
            <div className="collapsableNav">
                <div className="collapseContentContainer">
                    <div className={"collapseContent "+ this.props.collapseClass}>
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
                </div>
            </div>
        );
    }
}

export default CollapsableNav;