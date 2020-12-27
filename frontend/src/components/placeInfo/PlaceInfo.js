import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PlacesInfo.css'
import axios from 'axios';


const PlaceInfo = ({ match }) => {
    const [place, setPlace] = useState({})
    useEffect(() => {
        console.log(match.params.id);
        axios.get(`http://localhost:8000/api/v1/places/${match.params.id}`).then((res) => {
            console.log('place loaded');
            setPlace(res.data.data);
            console.log(place);
        }).catch((err) => {
            console.log('error');
            console.log(err.response.data);
        })
    }, [match]);
    let pics;
    console.log(13);
    if (place.images) {
        pics = place.images.map((imageUrl, index) => {
            return <img key={imageUrl} className={`image_${index}`} src={`http://localhost:8000/uploads/${imageUrl}`} />
        })
    }
    return (
        <Container>
            <div id='place_info'>
                <h3 className='headLine mt-3'>{place.title}</h3>
                <h4 className='headLine mt-3'>{place.address}</h4>
            </div>
            <Row>
                <Col lg={5}>
                    <Row>
                        {place.images && pics.slice(0, 1)}
                    </Row>
                </Col>
                <Col lg={7}>
                    <Row>
                        {place.images && pics.slice(1)}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default PlaceInfo