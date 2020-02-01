import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import TopNav from 'shared/components/TopNav'
import SideNav from 'shared/components/SideNav'
import CollapsableNav from 'shared/components/CollapsableNav'
import Footer from 'desktop/components/Footer'

import routes from './routes'

import './style.scss'
import 'responsive/medium.scss'

class ListRoutes extends Component {
    state = {
        collapse:true,
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
            <div className="docs">
                <TopNav handleCollapse={this.handleCollapse.bind(this)} backgroundColor="rgba(108,108,108,1)"/>
                <CollapsableNav collapse={this.state.collapse} collapseClass={this.state.collapseClass}/>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-10 leftContent">
                            <SideNav list={['Getting Started','Front-End','Back-End','Data Science','Computer Science']}/>
                        </div>
                        <div className="col-12 col-lg-10 col-md-9 rightContent">
                            <Switch>
                                {
                                    routes.map( route => (
                                        <Route key={route.path} {...route}/>
                                    ))
                                }
                            </Switch>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default ListRoutes;