import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import './Place.css'





export default class Place extends Component {
    render() {
        const cityImg = `https://a0.muscache.com/im/pictures/${this.props.id}.jpg?im_w=720`
        return (
            <>
                <Col lg={3} md={6} sm={12}>
                    <div className="img-wrapper" >
                        <Link to={`/search/${this.props._id}`}>
                            <img src={cityImg} alt='Houses Pictures' className='pic' />
                        </Link>
                        <span className="heart"><i className={this.props.heart}></i></span>
                    </div>
                    <span className='rate'>
                        <i className={this.props.star}></i>
                        <span className='ml-2'>4.93</span>
                    </span>
                    <ol className='list_info'>
                        <li>{this.props.desc}</li>
                        <li>{this.props.add}</li>
                    </ol>
                    <span className='prices'>{this.props.price}</span>
                </Col>
            </>
        )
    }
}

