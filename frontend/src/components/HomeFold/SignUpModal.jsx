import React from 'react'
import { Modal, Form } from 'react-bootstrap'

const SignUpModal = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.onHide} className="form-modal modal-signUp">
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <button type="submit" className="form-modal__btn-submit">
                            Sign Up
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SignUpModal
