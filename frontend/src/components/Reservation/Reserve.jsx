import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa'
import PayingForm from './PayingForm';
import PriceCard from './PriceCard';
import Footer from '../Footer/Footer';

const Reserve = () => {
    return (
        <React.Fragment>
            <div className="container py-5">
                <div className='d-flex align-items-center'>
                    <NavLink to='/ay7aga' style={{ color: 'black' }}><FaLessThan /></NavLink>
                    <h2 className='ml-5'>Request to book</h2>
                </div>
                <div className='row justify-content-between'>
                    <div className='col-6'>

                        <h5 className='my-4' style={{ height: '1px', backgroundColor: '#ddd' }}></h5>
                        <div className="trip">
                            <h3>Your Trip</h3>
                            <div className='d-flex justify-content-between mt-4'>
                                <div>
                                    <h5>Dates</h5>
                                    <p>date here</p>
                                    <p>check in</p>
                                </div>
                                <NavLink to='/editPage' style={{ color: '#000' }}>Edit</NavLink>
                            </div>
                            <div className='d-flex justify-content-between mt-4'>
                                <div>
                                    <h5>Guests</h5>
                                    <p>number of guestes</p>
                                </div>
                                <NavLink to='/editPage' style={{ color: '#000' }}>Edit</NavLink>
                            </div>
                        </div>
                        <h5 className='my-4' style={{ height: '1px', backgroundColor: '#ddd' }}></h5>
                        <PayingForm />
                    </div>
                    
                    <div className="col-5">
                        <PriceCard />
                    </div>
                </div>
            </div>
                <Footer />
        </React.Fragment>
    )
}

export default Reserve
