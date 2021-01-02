import React from 'react'
<<<<<<< HEAD
import Header from '../Header/Header'
=======
import { Link } from 'react-router-dom'
>>>>>>> 8c93ad0ce7cc5dc194c35169ddf2e24b80cc5005
import './HomeFold.scss'
import SearchBar from './SearchBar'
import {withRouter} from 'react-router-dom';

<<<<<<< HEAD
const HomeFold = () => {
=======

const HomeFold = () => {
   
>>>>>>> 8c93ad0ce7cc5dc194c35169ddf2e24b80cc5005
    return (
        <>
            <div className="h-fold">
                <Header />
                <div className="h-fold__search">
                    <div className="container">
                        <SearchBar />
                    </div>
                </div>

                <div className="h-fold__content">
                    <div className="container">
                        <h1>
                            <span>Go</span>
                            <span>Near</span>
                        </h1>

                        <button className="btn btn-explore">Explore nearby stays</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(HomeFold)
