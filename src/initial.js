import { createStore, combineReducers, applyMiddleware } from 'redux'
import  publicReducers from './public/Reducers.js'
import  managerReducers from './manager/Reducers.js'
import { routerReducer, routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import { hashHistory } from 'react-router'

const initialState = {};

const reducer = combineReducers({ ...Object.assign({},
    publicReducers,
    managerReducers
),routing: routerReducer });


function createFoodStore() {
    return createStore(reducer,applyMiddleware(thunk,routerMiddleware(hashHistory)));
}

export { createFoodStore }
