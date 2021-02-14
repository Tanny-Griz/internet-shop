import React from 'react'
import { Input, Label, Container, Row, Col } from 'reactstrap'

const TopBar = ({filtredCars, setfiltredCars, selectOptionBrand}) => {

    const handleSortByPrice = (e) => {
        const newSort = [...filtredCars].sort((a, b) => {
            if (e.target.value === 'Price Ascending') return a.price - b.price;
            if (e.target.value === 'Price Вescending') return b.price - a.price;
        });
        e.target.value === 'Sort'
            ? setfiltredCars([...filtredCars])
            : setfiltredCars([...newSort])
        console.log(e);
    }

    return (
        <>
            <div className="topbar">
                {selectOptionBrand && selectOptionBrand.map(o => {
                    return (
                        <div key={'@'+ o} className="">
                            <span>{o}&nbsp;<i className="fas fa-times"></i></span>
                        </div>                        
                    )
                })}

            </div>
            <Row className="select-price">
                <Col md="4">
                    <Input
                        type="select"
                        id="price"
                        onChange={(e) => handleSortByPrice(e)}
                    >
                        <option>Sort</option>
                        <option>Price Ascending</option>
                        <option>Price Вescending</option>
                    </Input>                
                </Col>
            </Row>            
        </>
    )
}

export default TopBar