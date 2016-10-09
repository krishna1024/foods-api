import PublicContainer from './PublicContainer.js'
import searchRoutes from './search/routes.js'
import cateringRoutes from './catering/routes.js'

import { Route } from 'react-router'
import React from 'react'

const routes = (
    <Route path="/" component={ PublicContainer } >
        { searchRoutes }
        { cateringRoutes }
    </Route>
);

export default routes
