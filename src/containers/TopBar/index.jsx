import React from 'react'
import { Input, Row, Col } from 'reactstrap'

const TopBar = ({filtredCars, setfiltredCars, selectOptionBrand}) => {

    const handleSortByPrice = (e) => {
        const newSort = [...filtredCars].sort((a, b) => {
            if (e.target.value === 'Price Ascending') return a.price - b.price;
            if (e.target.value === 'Price Descending') return b.price - a.price;
        });
        e.target.value === 'Sort'
            ? setfiltredCars([...filtredCars])
            : setfiltredCars([...newSort])
    }

    return (
        <>
            <div className="topbar">
                <div><p><b style={{'color': '#009FD7'}}>{filtredCars.length}</b> Ads matching your search criteria</p></div>
                <div style={{'display': 'flex'}}>
                    {selectOptionBrand && selectOptionBrand.map(o => {
                        return (
                            <div key={'@'+ o} className="">
                                <span>{o}&nbsp;<i className="fas fa-times"></i></span>
                            </div>
                        )
                    })}
                </div>
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
                        <option>Price Descending</option>
                    </Input>                
                </Col>
            </Row>            
        </>
    )
}

export default TopBar