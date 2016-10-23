import CateringContainer from './CateringContainer.js'
import ManageMenuRoutes from './manage-menus/routes.js'
import CateringMenusContainer from './manage-menus/CateringMenuContainer.js'
import ManageOrdersRoutes from './manage-orders/routes.js'
import ManageOrdersContainer from './manage-orders/ManageOrdersContainer.js'
import { Route , IndexRoute } from 'react-router'
import React from 'react'

const routes = (
  <Route path="catering" component={ CateringContainer } >
    <Route path="orders" component={ ManageOrdersContainer } >
      { ManageOrdersRoutes }
    </Route>
    <Route path="menus" component={ CateringMenusContainer } >
      { ManageMenuRoutes }
    </Route>
  </Route>
);

export default routes
