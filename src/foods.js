import React from 'react'
import ReactDom from 'react-dom'

import { createFoodStore } from './initial.js'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import PublicRoutes from './public/Routes.js'
import ManagerRoutes from './manager/Routes.js'

const store = createFoodStore();
const history = syncHistoryWithStore(hashHistory, store)

ReactDom.render(
    <Provider store={store} >
        <Router history={ history } >
            { PublicRoutes }
            { ManagerRoutes }
        </Router>
    </Provider>,
    document.getElementById('app'));
store.subscribe( () => console.dir(store.getState()));