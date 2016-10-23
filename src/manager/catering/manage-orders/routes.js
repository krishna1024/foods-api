import ViewOrderDetailsContainer from './ViewOrderDetailsContainer.js'
import { Route , IndexRoute } from 'react-router'
import React from 'react'

const routes = (
    <Route path="orders/:id" component={ ViewOrderDetailsContainer }/>
);

export default routes
