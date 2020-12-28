import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './HomeFold.scss'
import { ReactComponent as Logo } from '../../images/logo.svg'
import { ReactComponent as UserIcon } from '../../images/header-user-icon.svg'
import { ReactComponent as ListIcon } from '../../images/icon-list.svg'
import { Dropdown, Button, Modal, Form } from 'react-bootstrap'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'
import { AppContext } from '../../contexts/AppContext';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

import {useHistory } from 'react-router-dom';

const HomeFold = (props) => {
    const { logged, logout } = useContext(AppContext);
    const [showLogin, setShowLogin] = useState(false)
    const handleCloseLogin = () => setShowLogin(false)
    const handleShowLogin = () => setShowLogin(true)

    const [showSignUp, setShowSignUp] = useState(false)
    const handleCloseSignUp = () => setShowSignUp(false)
    const handleShowSignUp = () => setShowSignUp(true)

    const handleLogOut = () => logout();

    const [location, setLocation] = useState('dummy city');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guests, setGuests] = useState('3');

    const history = useHistory();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(location, startDate, endDate, guests);
        console.log(props);
        history.push('/search', {city: location, startDate, endDate, guests});

        // axios.post(`http://localhost:8000/api/v1/places`, { city: location, startDate, endDate, guests }).then((res) => {
        //     // setProperities(res.data.data);
        //     console.log(res.data);
        // }).catch((err) => {
        //     console.log('error');
        //     console.log(err.response);
        // })
    }

    return (
        <>
            <div className="h-fold">
                <header className="h-header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="h-header__logo">
                                    <Link to="/">
                                        <Logo />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-auto">
                                <nav className="h-header__nav">
                                    {/* <div className="h-header__become-host">
                                        <Link to="/host">Become a host</Link>
                                    </div> */}
                                    <div className="h-header__actions">
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                menualign="right"
                                                id="dropdown-basic"
                                                className="actions-btn">
                                                <span className="icon-list">
                                                    <ListIcon />
                                                </span>
                                                <span className="icon-user">
                                                    <UserIcon />
                                                </span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu
                                                align="right"
                                                className="h-header__actions-menu">
                                                {logged ? null : <><Button
                                                    variant="link"
                                                    onClick={handleShowSignUp}
                                                    className="signUp">
                                                    Sign Up
                                                </Button>
                                                    <Button
                                                        variant="link"
                                                        onClick={handleShowLogin}
                                                        className="login">
                                                        Login
                                                </Button></>}
                                                {logged ?
                                                    <>
                                                        <Link to="/host">Host your Home</Link>
                                                        <Link to="/dashboard">Dashboard</Link>
                                                        <Button
                                                            variant="link"
                                                            onClick={handleLogOut}
                                                            className="logout">
                                                            Log out
                                                </Button>
                                                    </> : null}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="search-bar">
                    <div className="container text-center">
                        {/* <h2 className="text-center text-white">Search Bar Goes Here ...</h2> */}
                        <form onSubmit={handleSearchSubmit}>
                            <input type="text" placeholder="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                            <input type="date" placeholder="start" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            <input type="date" placeholder="end" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            <input type="number" placeholder="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                            <input type="submit" value="submit" />
                        </form>
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

                <LoginModal show={showLogin} onHide={handleCloseLogin} />
                <SignUpModal show={showSignUp} onHide={handleCloseSignUp} />
            </div>
        </>
    )
}

export default withRouter(HomeFold)
