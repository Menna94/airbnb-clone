import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import PlaceInfo from '../components/placeInfo/PlaceInfo';

const PlaceInfoScreen = ({ match }) => {
    return (
        <Container>
            <PlaceInfo match={match}/>
        </Container>
    )
}

export default PlaceInfoScreen