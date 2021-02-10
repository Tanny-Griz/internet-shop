import * as R from 'ramda'

// export const getCarsById = (state, id) => state.cars.id
export const getCarsById = (state, id) => R.prop(id, state.cars)

export const getCars = state => {
    // 1 p - F() for each, 2 p - [].ids
    const cars = R.map(id => getCarsById(state, id), state.carsPage.ids)
    return cars
}