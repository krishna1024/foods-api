import PublicContainer from './PublicContainer.js'
import searchRoutes from './search/routes.js'
import cateringRoutes from './catering/routes.js'
import Intro from './Intro/Intro.js'

import { Route, IndexRoute } from 'react-router'
import React from 'react'

const routes = (
    <Route path="/" component={ PublicContainer } >
        <IndexRoute component={ Intro } />
        { searchRoutes }
        { cateringRoutes }
    </Route>
);

export default routes
