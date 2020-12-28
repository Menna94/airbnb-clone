import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import PlaceInfo from '../components/placeInfo/PlaceInfo'
import Header from '../components/Header/Header'

const PlaceInfoScreen = ({ match }) => {
    return (
        <>
            <Header headerInner={true} />
            <Container>
                <PlaceInfo match={match} />
            </Container>
        </>
    )
}

export default PlaceInfoScreen
