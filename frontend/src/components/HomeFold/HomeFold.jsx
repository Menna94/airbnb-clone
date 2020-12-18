import React from "react";
import { Link } from "react-router-dom";
import "./HomeFold.scss";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as UserIcon } from "../../images/header-user-icon.svg";
import { ReactComponent as ListIcon } from "../../images/icon-list.svg";
import { Dropdown } from "react-bootstrap";

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
                                            <Dropdown.Toggle menuAlign="right" id="dropdown-basic">
                                                <span className="icon-list">
                                                    <ListIcon />
                                                </span>

                                                <span className="icon-user">
                                                    <UserIcon />
                                                </span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="right">
                                                <Dropdown.Item href="#/action-1">Sign Up</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="#/action-3">Host your Home</Dropdown.Item>
                                                <Dropdown.Item href="#/action-4">Help</Dropdown.Item>
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
            </div>
        </>
    );
};

export default HomeFold;
