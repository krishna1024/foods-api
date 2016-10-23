import ManagerContainer from './ManagerContainer.js'
import IntroContainer from './intro/IntroContainer.js'
import { Route , IndexRoute } from 'react-router'
import CateringRoutes from './catering/routes.js'
import React from 'react'

const routes = (
    <Route path="/manager" component={ ManagerContainer } >
      <IndexRoute component={ IntroContainer }/>
      { CateringRoutes }
    </Route>
);

export default routes
