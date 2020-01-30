import React, {Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import data from './data'

const Routes = (props) => {
    return (
        <Router>
        <div className="route">
            <Suspense fallback={ <div>Loading</div> }>
                <Switch>
                    {
                        data.map( (item) => <Route key={item.path} {...item}/>)
                    }
                </Switch>
            </Suspense>
        </div>
    </Router>
    )
}

export default Routes
