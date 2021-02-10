import * as R from 'ramda'

import {
    FETCH_CARS_SUCCESS,
} from '../store/actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CARS_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            console.log(payload);
            return R.merge(state, newValues)

            // return payload
        default:
            return state
    }
}

