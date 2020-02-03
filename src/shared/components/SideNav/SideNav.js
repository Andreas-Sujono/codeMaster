import React, { Component } from 'react';
import './style.scss'
import {Link} from 'react-router-dom'

class SideNav extends Component {

    render() {
        const {list} = this.props
        return (
            <div className="sideNav">
                {
                    
                    list.slice(1).map (item => 
                        <div class="sideNavItem">
                            <Link to={item.path}>{item.name}</Link> 
                            <span> > </span>
                            {
                                item.content &&
                                <ul className="sideNavList">
                                    {item.content.map(item2 => <li> <Link to={item2.path}>{item2.name}</Link> </li>)}
                                </ul>
                            }
                           
                        </div>    
                    )
                }
                <hr />
            </div>
        );
    }
}

export default SideNav;