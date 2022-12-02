import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from 'react-bootstrap';



const Contact = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <section className="bg-white pt-5 pb-5">
            <Container>
                <div className="content-inner-bx">
                    <Row>
                        <Col ms={5}>
                            <div className="contect-left-content-bx">
                                <h1 className='mb-3'>Contact Us</h1>
                                <ListGroup className="list-bx" as="ul">
                                    <ListGroup.Item as="li">
                                        <h4>Inspections</h4>
                                        <span>(800) 309-6753 | info@wini.com</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <h4>Franchising</h4>
                                        <span>(800) 309-6753 | info@wini.com</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <h4>Vendors</h4>
                                        <span>(800) 309-6753 | info@wini.com</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col md={7}>
                            <Form className="form-bx" noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control required type="text" placeholder="Full Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control required type="email" placeholder="xyz@abc.com" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid Email Address.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control required type="email" placeholder="(123) 456-7890" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid Phone Number.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control required type="email" placeholder="XXXXX" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid zip.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-3" controlId="formMessage">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="Please type it in here..." />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Button className="submit-button" variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row >
                </div>
                <div className="emaill-subscribe-bx mt-5 text-center">
                    <Row>
                        <Col className="mx-auto" md={9}>
                            <h2>
                                Subscribe to our emails
                            </h2>
                            <p>
                                Enter your email address to receive the latest notifications, newsletters, and updates from WIN!
                            </p>
                            <Form>
                                <Form.Group className="d-flex justify-content-center" controlId="formSubscribeEmail">
                                    <Form.Control type="text" placeholder="Your email address" />
                                    <Button variant="primary" type="submit">
                                        Subscribe
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Contact;