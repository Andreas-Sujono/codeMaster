import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import TopNav from 'shared/components/TopNav'
import SideNav from 'shared/components/SideNav'
import Footer from 'desktop/components/Footer'

import routes from './routes'

import './style.scss'
import 'responsive/medium.scss'

class ListRoutes extends Component {

    render() {
        return (
            <div className="docs">
                <TopNav backgroundColor="rgba(108,108,108,1)"/>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-10 leftContent">
                            <SideNav list={routes}/>
                        </div>
                        <div className="col-12 col-lg-10 col-md-9 rightContent">
                            <Switch>
                                {
                                    routes.map( route => 
                                        <Route key={route.path} {...route}/>
                                    )
                                }
                                {
                                  routes.map( route => 
                                    route.content &&
                                    route.content.map( route2 => <Route key={route2.path} {...route2}/>)       
                                )  
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