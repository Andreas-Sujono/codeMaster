import React, { Component } from 'react';
import './style.scss'
import TocIcon from '@material-ui/icons/Toc';
import SideNavList from './SideNavList'
import logo from 'assets/logo.png'


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

                <div className="sideNavLogo">
                    <img src={logo}/>
                </div>
                <div class="collapseIcon" onClick={this.handleCollapse} > 
                    <TocIcon fontSize="large"/> 
                </div>

                <SideNavList 
                    list={list} 
                    collapse={this.state.collapse} 
                    active={this.state.active} 
                    changeActive={this.changeActive}
                />

                
            </div>
        );
    }
}


export default SideNav;