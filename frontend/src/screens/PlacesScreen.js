import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import PlacesInfo from '../components/PlacesInfo/PlacesInfo'



const PlacesScreen = ({ match }) => {
    return (
        <Container>
            <PlacesInfo />
        </Container>
    )
}

export default PlacesScreen
