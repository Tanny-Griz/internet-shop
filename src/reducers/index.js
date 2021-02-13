import React from 'react'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import carsPage from './carsPage'

export default history => combineReducers({
    carsPage,
    router: connectRouter(history)
})