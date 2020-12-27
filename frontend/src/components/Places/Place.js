import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './Place.css'
export default class Place extends Component {
    render() {
        const cityImgURL = `http://localhost:8000/uploads/${this.props.place.images[0]}`;
        return (
            <>
                <Col lg={3} md={6} sm={12}>
                    <Link to={`/search/${this.props.place._id}`}>
                        <div className="img-wrapper" >
                            <img src={cityImgURL} alt='Place Picture' className='pic' />
                            <span className="heart"><i className={'far fa-heart'}></i></span>
                        </div>
                        <span className='rate'>
                            <i className={'stars fas fa-star'}></i>
                            <span className='ml-2'>4.93</span>
                        </span>
                        <ol className='list_info'>
                            <li>{this.props.place.description}</li>
                            <li>{this.props.place.address}</li>
                        </ol>
                        <span className='prices'>{this.props.place.price}$/day</span>
                    </Link>
                </Col>
            </>
        )
    }
}

