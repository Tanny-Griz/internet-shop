import React from 'react'

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import cars from '../containers/Cars'
import carsPage from './carsPage'

export default history => combineReducers({
    cars,
    carsPage,
    router: connectRouter(history)
})