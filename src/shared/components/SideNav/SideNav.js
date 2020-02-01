import React, { Component } from 'react';
import './style.scss'

class SideNav extends Component {

    render() {
        const {list} = this.props
        return (
            <div className="sideNav">
                {
                    list.map (item => 
                        <div class="sideNavItem">
                            {item} <span> > </span>
                        </div>    
                    )
                }
            </div>
        );
    }
}

export default SideNav;