import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Cars from '../Cars'
import Sidebar from '../Sidebar/index'
import TopBar from '../TopBar/index'
import Pagination from '../../components/Pagination'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'

const Layout = () => {
    const cars = useSelector(state => state.carsPage)

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(10)
    const [selectOptionBrand, setSelectOptionBrand] = useState([])

    const [filtredCars, setfiltredCars] = useState([])


    useEffect(() => {
        setLoading(true)
        setfiltredCars([...cars])
        setLoading(false)
    }, [cars])

    const indexOfLastPost = currentPage * postPerPage
    const idexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = filtredCars.slice(idexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
        <Header />
        <div className="wrapper">
            <Container>
                <Row>
                    <Col md="12" className="bread-crumbs">
                        <i className="fas fa-long-arrow-alt-left"></i>
                        <Link to="/blog">
                            &nbsp;Blog
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Sidebar 
                            selectOptionBrand={selectOptionBrand}
                            setSelectOptionBrand={setSelectOptionBrand} 
                            cars={cars} 
                            filtredCars={filtredCars} 
                            setfiltredCars={setfiltredCars}  
                        />
                    </Col>
                    <Col md="8">
                        <Row>
                            <Col md="12">
                                <TopBar 
                                    selectOptionBrand={selectOptionBrand}
                                    setSelectOptionBrand={setSelectOptionBrand} 
                                    filtredCars={filtredCars} 
                                    setfiltredCars={setfiltredCars}  
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <Cars posts={currentPosts} loading={loading} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Pagination 
                            postPerPage={postPerPage} 
                            totalPosts={filtredCars.length} 
                            paginate={paginate} 
                        />
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
    </>
)
}


export default Layout
