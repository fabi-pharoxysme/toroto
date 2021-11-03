import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Project from './pages/Project/Project'
import Home from './pages/Home/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path='/detalle/:id' component={Project}/>
            <Route exact path='/' component={Home}/>
        </Switch>
    )
}

export default Routes 