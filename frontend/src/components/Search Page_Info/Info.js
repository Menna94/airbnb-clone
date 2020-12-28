import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Info.css'

function Info() {
    return (
        <>
            <div className='searchPage'>
                <div className='searchPage__info'>300+ stays</div>
                <h1>Places to stay near you</h1>
                <Button variant="outlined" className='searchPage__btn'><span>Cancellation flexibility</span></Button>
                <Button variant="outlined" className='searchPage__btn'><span>Type of place</span></Button>
                <Button variant="outlined" className='searchPage__btn'><span>Price</span></Button>
                <Button variant="outlined" className='searchPage__btn'><span>More filters</span></Button>

                <Button variant='outlined' className='searchPage__map float-right'>
                    <span><i class="far fa-map"></i></span>
                    <span>Show map</span>
                </Button>
                <div className='mt-4'>
                    Review COVID-19 travel restrictions before you book.
                    <Link to='https://www.airbnb.co.uk/help/topic/1418/government-travel-restrictions-and-advisories'
                        className='link ml-1'>
                        Learn more
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Info
