import {FETCH_CARS_START, 
        FETCH_CARS_SUCCESS,
        FETCH_CARS_FAILURE} from '../store/actionTypes'
import {fetchCars as fetchCarsApi} from './api'

export const fetchCars = () => async dispatch => {
    dispatch({
        type: FETCH_CARS_START
    })

    try {
        const cars = await fetchCarsApi()
        dispatch({
            type: FETCH_CARS_SUCCESS,
            payload: cars
        })
    } catch (err) {
        dispatch({
            type: FETCH_CARS_FAILURE,
            payload: err,
            error: true
        })
    }
}