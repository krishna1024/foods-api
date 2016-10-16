import CateringContainer from './CateringContainer.js'
import ManageOrdersContainer from './manage-orders/ManageOrdersContainer.js'
import ViewOrderDetailsContainer from './manage-orders/ViewOrderDetailsContainer.js'
import { Route , IndexRoute } from 'react-router'
import React from 'react'

const routes = (
  <Route path="/manager/catering" component={ CateringContainer } >
    <Route path="orders" component={ ManageOrdersContainer } />
    <Route path="orders/:id" component={ ViewOrderDetailsContainer }/>
  </Route>
);

export default routes
