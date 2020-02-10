import React, {Suspense} from 'react'
import {HashRouter,Route, Switch} from 'react-router-dom'
import data from './data'
import Loading from 'shared/components/Loading'

import './style.scss'

const Routes = (props) => {
    return (
        <HashRouter>
        <div className="route">
            <Suspense fallback={ Loading }>
                <Switch>
                    {
                        data.map( (item) => <Route key={item.path} {...item}/>)
                    }
                </Switch>
            </Suspense>
        </div>
    </HashRouter>
    )
}

export default Routes
