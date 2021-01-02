import React, { useState, useContext } from 'react'
import { Modal, Form } from 'react-bootstrap'

import './Modals.scss'

const LoginModal = (props) => {
   
    return (
        <>
            <Modal show={props.show} onHide={props.onHide} className="form-modal modal-login">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <button type="submit" className="form-modal__btn-submit">
                            Login
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoginModal
