import React from 'react'
import { Link } from 'react-router-dom'
import './HomeFold.scss'
import { ReactComponent as Logo } from '../../images/logo.svg'
import { ReactComponent as UserIcon } from '../../images/header-user-icon.svg'
import { ReactComponent as ListIcon } from '../../images/icon-list.svg'
import { Dropdown, Button, Modal, Form } from 'react-bootstrap'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'


const HomeFold = () => {
   
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
                                    <div className="h-header__become-host">
                                        <Link to="/host/homes">Become a host</Link>
                                    </div>
                                    <div className="h-header__actions">
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                menuAlign="right"
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
                                                <Button
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
                                                </Button>
                                                <Dropdown.Divider />
                                                <Link to="/host/homes">Host your Home</Link>
                                                <Link to="/host/dashboard">Dashboard</Link>
                                                <Link to="/help">Help</Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="search-bar">
                    <div className="container">
                        <h2 className="text-center text-white">Search Bar Goes Here ...</h2>
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

export default HomeFold
