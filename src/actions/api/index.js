import cars from '../api/mockCars'

export const fetchCars = async () => {
    return new Promise((resolve, rej) => {
        resolve(cars)
        // rej('error')
    })
}