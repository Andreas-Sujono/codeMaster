import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import TopNav from 'shared/components/TopNav'
import SideNav from 'shared/components/SideNav'
import Footer from 'desktop/components/Footer'

import TocIcon from '@material-ui/icons/Toc';

import routes from './routes'

import './style.scss'
import 'responsive/medium.scss'

class ListRoutes extends Component {
    render() {
        return (
            <div className="docs">
                <TopNav backgroundColor="rgba(108,108,108,1)"/>
                <SideNav list={routes}/>
                <div className="container">
                    <div className="rightContent">
                        <Switch>
                            {
                                //handle main route
                                routes.map( route => 
                                    <Route key={route.path} {...route}/>
                                )
                            }
                            {
                                //handle subroute
                                routes.map( route => 
                                route.content &&
                                route.content.map( route2 => <Route key={route2.path} {...route2}/>)       
                            )  
                            }
                        </Switch>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default ListRoutes;