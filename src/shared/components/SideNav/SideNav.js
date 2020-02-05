import React, { Component } from 'react';
import './style.scss'
import {Link} from 'react-router-dom'
import TocIcon from '@material-ui/icons/Toc';


class SideNav extends Component {
    state = {
        active:'Getting Started',
        collapse:false,
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    
    handleClickOutside = (event) => {
        if (window.innerWidth <= 900 && this.refs.sideNav && !this.refs.sideNav.contains(event.target)) {
            this.setState({collapse:true})
        }
        console.log(window.innerWidth)
        
    }

    changeActive = e =>{
        this.setState({active:e})
    }
    handleCollapse = () =>{
        this.setState( prevState => ({
            collapse:!prevState.collapse
        }))
    }



    render() {
        const {list} = this.props
        return (
            <div className="sideNav" ref="sideNav">

                <div class="collapseIcon" onClick={this.handleCollapse} > 
                    <TocIcon fontSize="large"/> 
                </div>

                <div className={`sideNavContent ${this.state.collapse? 'sideNavhidden': 'sideNavshow'}`}>
                    {  
                        list.slice(1).map (item => 
                            <div class="sideNavItem">
                                <div className="sideNavItemMain" className={this.state.active == item.name? 'active':'inactive'}>
                                    <Link to={item.path} onClick={() => this.changeActive(item.name)}>{item.name}</Link> 
                                    <span> > </span>
                                </div>
                                
                                {
                                    item.content &&
                                    <ul className="sideNavList">
                                        {item.content.map(item2 => <li className={this.state.active == item2.name? 'active':'inactive'}> <Link to={item2.path} onClick={() => this.changeActive(item2.name)}>{item2.name}</Link> </li>)}
                                    </ul>
                                }
                            
                            </div>    
                        )
                    }
                    <hr />
                </div>
                
                
            </div>
        );
    }
}


export default SideNav;