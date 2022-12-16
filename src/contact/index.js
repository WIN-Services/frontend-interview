import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactdetail } from "../contactdetail";


export default class ContactUs extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = { description: '' }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }
        )
    }
    onSubmit(e) {
        e.prventDefault();
        fetch(this.props.formAction, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description: this.state.description })
        }

        )
        this.setState({ description: '' })
    }

    render() {

        return (

            <Container className="Cont">


                <Row className="sec_sp" >
                    <Col lg="5" className="mb-5" >
                        <h3 className="color_sec py-4 px-4" > Contact Us </h3>
                        <pre></pre>

                        <address >
                            <strong > Inspections </strong>{" "} <pre></pre>
                            <a href={`mailto:${contactdetail.User_Email}`}>  {contactdetail.YOUR_FONE}
                            </a> |
                            <a href={`mailto:${contactdetail.User_Email}`}> {contactdetail.User_Email}</a>
                            <br />
                            <br />

                            <strong > Franchising </strong>{" "} <pre></pre>
                            <a href={`mailto:${contactdetail.User_Email}`}> {contactdetail.YOUR_FONE}
                            </a> |
                            <a href={`mailto:${contactdetail.User_Email}`}>  {contactdetail.User_Email}
                            </a>
                            <br />
                            <br />

                            <strong > Vendors </strong>{" "} <pre></pre>
                            <a href={`mailto:${contactdetail.User_Email}`} > {contactdetail.Your_Phone}
                            </a> |
                            <a href={`mailto:${contactdetail.User_Email}`} > {contactdetail.Vendor_Email}</a>
                        </address>

                    </Col>
                    <Col lg="7" className="d-flex align-items-center mb-6 py-4" >
                        <form className="contact__form w-100" action={this.props.action}
                            method={this.props.method}
                            onSubmit={this.onSubmit}
                        >
                            <Row >
                                <Col lg="6" className="form-group" >
                                    < p className="tar" > Name </p>
                                    <input className="form-control" id="name" name="name" placeholder="Full Name" type="text" required />
                                </Col>

                                <Col lg="6" className="form-group" >
                                    <p className="tar" > Email </p>
                                    < input className="form-control" id="User_Email" name="User_Email" placeholder="xyz@abc.com" type="User_Email" required />

                                </Col>
                                <Col lg="6" className="form-group" >
                                    <p className="tar" > Phone Number </p>
                                    < input className="form-control" id="Phone Number" name="Phone Number" placeholder="(123)456-7890" type="text" required />

                                </Col>

                                <Col lg="6" className="form-group" >
                                    < p className="tar" > ZIP Code </p>
                                    <input className="form-control" id="Zip Code" name="Zip Code" placeholder="xxxxx" type="Zip Code" required />

                                </Col>
                            </Row>

                            <div className="mb-4" >
                                <p className="tar" > Message </p>

                                <textarea className="form-control z-depth-1" id="message" name="message" placeholder="Please type it in here..." rows="4" required >
                                </textarea>
                            </div>
                            <br />
                            <Row className="mb-4" >
                                <Col lg="12" className="form-group " >
                                    <button className="btn" type="submit" >SUBMIT </button>

                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>

                <Row >
                    <footer >
                        <h1 > Subscribe to our emails </h1>
                        <p style={{ paddingLeft: "15px", paddingRight: "5px" }}> Enter your email address to recieve the latest notifictions, newsletters and updates from WIN! </p>
                        <Row className="Foot" >

                            <Col lg="6" >
                                <input className="form-control rounded" id="User_Email" name="User_Email" placeholder="Your email address" type="email" required />
                            </Col>

                            <Col lg="6" >
                                <button className="ac_btn" type="button" >Subscribe </button> </Col> </Row>

                    </footer>


                </Row>


            </Container>

        );
    }
}
ContactUs.defaultProps = {
    action: ' /api/contact',
    method: 'post',
}
