import React from 'react'
import { Switch, Route } from 'react-router'
import { Container, Row, Col } from 'reactstrap';

import Cars from '../cars'

const routes = (
    <Switch>
        <Route path='/' component={Cars} exact />
    </Switch>
)

const Layout = () => (
    <div className="">
        <Container>
            <Row>
                <Col md="4" >sideBar</Col>
                <Col md="8" >{routes}</Col>
            </Row>         
        </Container>
    </div>
)

export default Layout
