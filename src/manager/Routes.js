import ManagerContainer from './ManagerContainer.js'
import Intro from './intro/Intro.js'
import { Route , IndexRoute } from 'react-router'
import CateringRoutes from './catering/routes.js'
import React from 'react'

const routes = (
    <Route path="/manager" component={ ManagerContainer } >
      <IndexRoute component={ Intro }/>
      { CateringRoutes }
    </Route>
);

export default routes
