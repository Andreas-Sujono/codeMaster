import React from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';
import ListRoutes from './ListRoutes'

function Docs(){
    return (
        <Switch>
            <Route path="/docs" component={ListRoutes}/>
        </Switch>
    );
}


export default withRouter(Docs);