import CateringContainer from './CateringContainer.js'
import ManageOrdersContainer from './manage-orders/ManageOrdersContainer.js'
import { Route , IndexRoute } from 'react-router'
import React from 'react'

const routes = (
  <Route path="/manager/catering" component={ CateringContainer } >
    <IndexRoute component={ ManageOrdersContainer } />
  </Route>
);

export default routes
