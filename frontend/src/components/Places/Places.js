import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Place from './Place'
import axios from 'axios';
import { withRouter } from 'react-router-dom'

class Places extends Component {
    constructor(props){
        super(props);
    }
    state = {
        places: []
    }
    componentDidMount() {
        console.log(this.props.location.state);
        
        axios.post(`http://localhost:8000/api/v1/places`, this.props.location.state).then((res) => {
            // setProperities(res.data.data);
            console.log(res.data);
            this.setState({
                places: res.data.data
            })
        }).catch((err) => {
            console.log('error');
            console.log(err.response);
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

export default withRouter(Places)