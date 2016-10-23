import CateringMenuContainer from './CateringMenuContainer.js'
import ViewCateringMenuContainer from './view-catering-menus/ViewCateringMenuContainer.js'
import NewCateringMenuContainer from './new-catering-menu/NewCateringMenuContainer.js'
import CateringMenusListContainer from './catering-menus-list/CateringMenusListContainer.js'

import { Route , IndexRoute } from 'react-router'
import React from 'react'

const routes = [
    <IndexRoute key="browse" component={ CateringMenusListContainer } />,
    <Route key="new" path="new" component={ NewCateringMenuContainer }/>,
    <Route key="id" path=":id" component={ ViewCateringMenuContainer } />
];

export default routes
