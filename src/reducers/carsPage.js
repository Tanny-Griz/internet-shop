import list from '../actions/api/mockCars'

import {
    FETCH_CARS_SUCCESS
} from '../store/actionTypes'

let initialState = [...list].map(c => {
    return {
        id: c.id,
        price: c.price,
        year: c.year,
        milliage: c.milliage,
        manufacturer: c.manufacturer,
        model: c.model,
        transmission: c.transmission,
        fuel_type: c.fuel_type,
        type: c.type,
        drivertrain: c.drivertrain
    }
})

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CARS_SUCCESS: 
        return payload
        default:
            return state
    }
}