import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchCars} from '../../actions'
import {getCars} from '../../store/selectors'

class Cars extends Component {
    componentDidMount() {
        this.props.fetchCars()
    }

    render() {
        console.log('c', this.props.cars);
        return (
            <div>Cars</div>
        )
    }
}
// global state
const mapStateToProps = state => ({
    cars: getCars(state)
})

const mapDispatchToProps = {
    fetchCars
}

export default connect(mapStateToProps, mapDispatchToProps)(Cars)
