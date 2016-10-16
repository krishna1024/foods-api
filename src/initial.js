import { createStore, combineReducers } from 'redux'
import  publicReducers from './public/Reducers.js'
import  managerReducers from './manager/Reducers.js'
import { routerReducer } from 'react-router-redux'

const initialState = {};

const reducer = combineReducers({ ...Object.assign({},
    publicReducers,
    managerReducers
),routing: routerReducer });


function createFoodStore() {
    return createStore(reducer,initialState);
}

export { createFoodStore }
