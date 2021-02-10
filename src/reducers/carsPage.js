import * as R from 'ramda'

import {
    FETCH_CARS_SUCCESS
    } from '../store/actionTypes'

const initialState = {
    ids: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CARS_SUCCESS: 
        return R.merge(state, {
            ids: R.pluck('id', payload)
        }) 
        default:
            return state
    }
}