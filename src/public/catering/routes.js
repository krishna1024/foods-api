import CateringContainer from './CateringContainer.js'
import MenuSelectionContainer from './menu-selection/MenuSelectionContainer.js'
import CustomizeMenuContainer from './customize-menu/CustomizeMenuContainer'
import PlaceOrderContainer from './place-order/PlaceOrderContainer.js'
import CheckoutContainer from './checkout/CheckoutContainer.js'
import Intro from './Intro/IntroContainer.js'
import Finish from './Finish/FinishContainer.js'

import { Route,IndexRoute } from 'react-router'
import React from 'react'

const routes = (
    <Route path="/catering" component={ CateringContainer } >
        <IndexRoute component={ Intro } />
        <Route path="select" component={ MenuSelectionContainer } />
        <Route path="customize" component={ CustomizeMenuContainer } />
        <Route path="order" component={ PlaceOrderContainer } />
        <Route path="checkout" component={ CheckoutContainer } />
        <Route path="finish" component={ Finish } />
    </Route>
);

export default routes
