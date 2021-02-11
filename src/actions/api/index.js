import cars from '../api/mockCars'
console.log(cars);
export const fetchCars = async () => {
    return new Promise((resolve, rej) => {
        resolve(cars)
        // rej('error')
    })
}