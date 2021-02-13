import React  from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import Select from 'react-select'

const filterYear = [
    {value: '2005', label: '2005'},
    {value: '2010', label: '2010'},
    {value: '2020', label: '2020'}
]

const Sidebar = ({cars, setfiltredCars}) => {

    let type = [...cars].map(car => car.type)
    let brand = [...cars].map(car => car.manufacturer)
    let model = [...cars].map(car => car.model)
    let transmission = [...cars].map(car => car.transmission)
    let drivertrain = [...cars].map(car => car.drivertrain)
    let fuel_type = [...cars].map(car => car.fuel_type)
    
    let uniqueType = Array.from(new Set(type))
    let uniqueBrand = Array.from(new Set(brand))
    let uniqueModel = Array.from(new Set(model))
    let uniqueTransmission = Array.from(new Set(transmission))
    let uniqueDrivertrain = Array.from(new Set(drivertrain))
    let uniqueFuel_type = Array.from(new Set(fuel_type))

    let initialFiltres = [
        {type: [...uniqueType.map(t => {
            return { value: t, label: t }
        }), {value: 'all', label: 'all'}]},
        {manufacturer: uniqueBrand},
        {model: [...uniqueModel.map(b => {
            return { value: b, label: b }
        }), {value: 'all', label: 'all'}]},
        {transmission: uniqueTransmission},
        {drivertrain: uniqueDrivertrain},
        {fuel_type: uniqueFuel_type},
    ]

    const handleVehicle = (e) => {
        const newArr = [...cars].filter(car => car.type === e.value)
        e.value === 'all'
            ? setfiltredCars([...cars])
            : setfiltredCars([...newArr])
    }

    // const handleManufactured = (e, option) => {

    //     if (option.action === 'select-option') {

    //     }
    //     if (option.action === 'clear') {
    //         setfiltredCars([...cars])
    //     }     
    // }

    const handleModel = (e) => {
        const newArr = [...cars].filter(car => car.model === e.value)
        e.value === 'all'
            ? setfiltredCars([...cars])
            : setfiltredCars([...newArr])
    }

    return (
        <>
            <div>
                <Form>
                    <FormGroup>
                    <Label for="vehicle">Vehicle type</Label>
                        <Select
                            placeholder={<div>all</div>}
                            id="vehicle"
                            options={initialFiltres[0].type}
                            className="mb-20"
                            classNamePrefix="select"
                            onChange={handleVehicle}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="manufacturer">Manufacturer</Label>
                        <Select
                            placeholder={<div>all</div>}
                            isMulti
                            id="manufacturer"
                            options={initialFiltres[1].manufacturer.map(b => {
                                return { value: b, label: b }
                            } )}
                            className="mb-20"
                            classNamePrefix="select"
                            // onChange={handleManufactured}
                        />
                    </FormGroup>
                    <FormGroup>
                    <Label for="model">Model</Label>
                        <Select
                            placeholder={<div>all</div>}
                            id="model"
                            options={initialFiltres[2].model}
                            className="mb-20"
                            classNamePrefix="select"
                            onChange={handleModel}
                        />
                    </FormGroup>
                </Form>

                <Form>
                    <FormGroup className="form-box">
                    <Label>Year</Label>
                        <div>
                            <Select
                                placeholder={<div>from</div>}
                                options={filterYear}
                                className="mb-20"
                                classNamePrefix="select"

                            />
                            <Select
                                placeholder={<div>to</div>}
                                options={filterYear}
                                className="mb-20"
                                classNamePrefix="select"
                            />                        
                        </div>
                    </FormGroup>
                    <FormGroup className="form-box">
                    <Label>Milliage <span>(miles)</span></Label>
                        <div>
                            <Select
                                placeholder={<div>from</div>}
                                options={filterYear}
                                className="mb-20"
                                classNamePrefix="select"

                            />
                            <Select
                                placeholder={<div>to</div>}
                                options={filterYear}
                                className="mb-20"
                                classNamePrefix="select"
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="form-box">
                    <Label>Price <span>($)</span></Label>
                        <div>
                            <Select
                                placeholder={<div>from</div>}
                                options={filterYear}
                                className="mb-20"
                                classNamePrefix="select"

                            />
                            <Select
                                placeholder={<div>to</div>}
                                options={filterYear}
                                className="mb-20"
                                classNamePrefix="select"
                            />                       
                        </div>
                    </FormGroup>
                </Form>
               
                <Form>
                    <FormGroup className="form-box">
                    <Label>Days on Market</Label>
                        <div>
                            <Select
                                placeholder={<div>from</div>}
                                options={filterYear}
                                className="mb-20"
                                classNamePrefix="select"

                            />
                            <Select
                                placeholder={<div>to</div>}
                                options={filterYear}
                                className="mb-20"
                                classNamePrefix="select"
                            />                       
                        </div>
                    </FormGroup> 
                </Form>

                <Form>
                <FormGroup check>
                    <p>Transmission</p>
                    {initialFiltres[3].transmission.map(t => {
                        return (
                            <Label check>
                                <Input type="checkbox" />{t}
                            </Label>
                        )
                    })}
                </FormGroup>
                </Form>

                <Form>
                    <FormGroup check>
                        <p>Drivertrain</p>
                        {initialFiltres[4].drivertrain.map(t => {
                            return (
                                <Label check>
                                    <Input type="checkbox" />{t}
                                </Label>
                            )
                        })}
                    </FormGroup>
                </Form>

                <Form>
                    <FormGroup check>
                        <p>Fuel Type</p>
                        {initialFiltres[5].fuel_type.map(t => {
                            return (
                                <Label check>
                                    <Input type="checkbox" />{t}
                                </Label>
                            )
                        })}
                    </FormGroup>
                </Form>

            </div>
        </>

    )
}

export default Sidebar