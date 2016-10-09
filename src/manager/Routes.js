import ManagerContainer from './ManagerContainer.js'
import { Route } from 'react-router'
import React from 'react'

const routes = (
    <Route path="/manager" component={ ManagerContainer } >
    </Route>
);

export default routes