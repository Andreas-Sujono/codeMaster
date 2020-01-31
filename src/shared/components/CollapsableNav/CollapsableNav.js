import React, { Component } from 'react';
import './style.scss'

class CollapsableNav extends Component {

    render() {
        const navList = ['Home','Get Started','Docs','Github','Contact']
        return (
            <div className="collapsableNav">
                <div className="collapseContentContainer">
                    <div className={"collapseContent "+ this.props.collapseClass}>
                        {
                            navList.map( item => (
                                <div class="collapseIndividual"> {item} </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CollapsableNav;