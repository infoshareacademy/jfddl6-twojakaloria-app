import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import auth from './state/auth'
import register from './state/register'

import addFood from './state/addFood'
import listFood from './state/listFood'
import usersFoodPlan from './state/usersFoodPlan'

const reducer = combineReducers({
    addFood,
    listFood,
    register,
    auth,
    usersFoodPlan
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
