import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Place from './Place'
import axios from 'axios';

class Places extends Component {
    state = {
        places: []
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/places').then((res) => {
            console.log('loaded places');
            this.setState({places: res.data.data});
        }).catch((err) => {
            console.log('error');
            console.log(err.response.data);
        })
    }
    render() {
        console.log(this.state.places)
        console.log(typeof this.state.places)
        return (
            <Container className='mb-3' id="Places">
                <Row>
                    {this.state.places.map((place, i) => (
                        <Place key={place._id} place={place} />

                    ))}
                </Row>
            </Container>
        )
    }
}

export default Places