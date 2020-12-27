import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Header1/Header'
import Places from '../Places/Places'
import Footer from '../Footer/Footer'

import MapContainer from '../Map/GoogleMap'
import './PlacesInfo.css'

const PlacesInfo = ({ match }) => {
    const Place = Places.defaultProps.cities.find((h) => h._id == match.params.id)
    const pics = `https://a0.muscache.com/im/pictures/${Place.id}.jpg?im_w=720`
    return (
        <>
            <Header />
            <Container>
                <div id='place_info'>
                    <h1 className='headLine mt-3'>{Place.description}</h1>
                    <span>
                        <i className={Place.star} id='star'></i>
                    &nbsp;
                    4.98
                </span>
                &nbsp;  . &nbsp;
                <span className='address'>{Place.add}</span>
                </div>
                <div className='img mt-3'>
                    <img src={pics} alt='pics of houses' />
                </div>
                <Row>
                    <Col sm={10}>
                        <h3 className='house_owner mt-3'>
                            Entire flat hosted by Ahmed
                    </h3>
                        <span>{Place.guests} guests . </span>
                        <span>{Place.propertyType} . </span>
                        <span>{Place.bedrooms} bed . </span>
                        <span>{Place.bathrooms} bathroom</span>
                    </Col>
                    <Col sm={2}>
                        <img className='profile_pic mt-3' src='https://a0.muscache.com/im/pictures/user/f0aa2fe5-dc0a-46d3-b8d0-986738afe441.jpg?im_w=240' />
                    </Col>
                    <Col sm={12}><hr /></Col>
                </Row>
                <Row>
                    <Col md={7} sm={3}>
                        <Row>
                            <Col md={12} sm={2}>
                                <div id='home_options'>
                                    <i class="fas fa-home"></i>
                                    <span className='txt ml-2'>Entire Home</span>
                                    <p className='ml-4'>
                                        You’ll have the apartment to yourself.
                                 </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} sm={12}>
                                <div id='home_options'>
                                    <i class="fas fa-restroom"></i>
                                    <span className='txt ml-2'>Cancellation policy</span>
                                    <p className='ml-4'>
                                        Add your trip dates to get the cancellation details for this stay.
                                </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} sm={12}>
                                <div id='home_options'>
                                    <i class="far fa-star"></i>
                                    <span className='txt ml-2'>Enhanced Clean</span>
                                    <p className='ml-4'>
                                        This host committed to Airbnb's 5-step enhanced cleaning process.
                                </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} sm={12}>
                                <div id='home_options'>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span className='txt ml-2'>Self check-in</span>
                                    <p className='ml-4'>
                                        You can check in with the doorman.
                                </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} sm={12}>
                                <div id='home_options'>
                                    <i class="far fa-lightbulb"></i>
                                    <span className='txt ml-2'>House rules</span>
                                    <p className='ml-4'>
                                        This place isn’t suitable for children under 12 and the host doesn’t allow pets, parties, or smoking.
                                </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5} sm={10}>
                        <div id='box' className='ml-auto mt-3'>
                            <span className='sp1'>
                                {Place.price}
                            </span>
                            <span className='sp3'>
                                <i class="fas fa-star"></i>
                                <span className='sp2 ml-1'>4.96 (57)</span>
                            </span>
                            <div className='small_box text-center'>
                                <div className='inner_div'>
                                    <div className='check_in'>
                                        <span className='sp'>
                                            Check-in
                                   <input type='date' />
                                        </span>
                                    </div>
                                    <div className='check_in check_out'>
                                        <span className='sp'>
                                            Check-out
                                    <input type='date' />
                                        </span>
                                    </div>
                                </div>
                                <div className='button text-center mt-3'>
                                    <input type='button' className='btn btn-danger' value='Check availability' />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <div id='description' className='mt-2'>
                    <span>
                        City Skyline Views: Charming, Cozy 1 bedroom 1 bathroom apartment in Agouza.
                        Close to Tahrir Square, Egyptian Museum, Zamalek neighborhood and walking distance to British Council.
                        64m2 Terrace with beautiful view over the Nile and Cairo Tower. It is fully equipped with all you might need,
                        freshly renovated.
                </span>
                    <br />
                    <br />
                    <span className='st_header'>Guest access</span><br />
                    <span>The Entire Place</span>
                    <div style={{ marginTop: `32px` }}>
                        <Link to='#' className='link'>contact host</Link>
                    </div>
                </div>
                <hr />
                <div style={{ paddingBottom: `24px` }} id='bedroom'>
                    <h2>Sleeping arrangements</h2>
                    <div className='box mt-5'>
                        <i class="fas fa-bed fa-3x"></i>
                        <div className='heading mt-3 ml-2'>Bedroom {Place.bedrooms}</div>
                        <div className='description1 mt-2 ml-3'>{Place.bedrooms} king bed</div>
                    </div>
                </div>
                <hr />
                <h2 className='amenities'>Amenities</h2>
                <Row>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                    <Col sm={3} xs={6}>
                        <i className="drawing_pic fas fa-snowflake"></i>
                        <span className='options_of_house'>Air conditioning</span>
                    </Col>
                </Row>
                <hr />
                <div style={{ paddingBottom: `24px` }} id='location'>
                    <h2>Location</h2>
                    <div style={{ marginBottom: `24px` }} className='mt-2'>Al Agouzah, Giza Governorate, Egypt</div>
                    <MapContainer />
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default PlacesInfo

