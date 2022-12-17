import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Contact extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = { description: '' }
    }
    onClick(e) {
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
            <div  style={{borderColor:"blue"}}>

            <Container className="Container">


                <Row className="section" >
                    <Col lg="5" className="mb-5 " >
                        <h3 className="color_sec py-4 px-4" > Contact Us </h3>
                        <pre></pre>

                        <address >
                            <strong > Inspections </strong>{" "} <pre></pre>
                            <a href={`mailto:${Contactinfo.Email}`}>  {Contactinfo.Phone}
                            </a> |
                            <a href={`mailto:${Contactinfo.Email}`}> {Contactinfo.Email}</a>
                            <br />
                            <br />

                            <strong > Franchising </strong>{" "} <pre></pre>
                            <a href={`mailto:${Contactinfo.Email}`}> {Contactinfo.Phone}
                            </a> |
                            <a href={`mailto:${Contactinfo.Email}`}>  {Contactinfo.Email}
                            </a>
                            <br />
                            <br />

                            <strong > Vendors </strong>{" "} <pre></pre>
                            <a href={`mailto:${Contactinfo.DifEmail}`} > {Contactinfo.DifPhone}
                            </a> |
                            <a href={`mailto:${Contactinfo.DifEmail}`} > {Contactinfo.DifEmail}</a>
                        </address>

                    </Col>
                    <Col lg="7" className="d-flex align-items-center mb-6 py-4" >
                        <form className="contact__form w-100" action={this.props.action}
                            method={this.props.method}
                            onSubmit={this.onSubmit}
                        >
                            <Row>
                                <Col lg="6" className="form-group" >
                                    < p className="term" > Name </p>
                                    <input className="form-control" id="name" name="name" placeholder="Full Name" type="text" required />
                                </Col>

                                <Col lg="6" className="form-group" >
                                    <p className="term" > Email </p>
                                    < input className="form-control px-4" id="Email" name="Email" placeholder="xyz@abc.com" type="Email" required />

                                </Col>
                                <Col lg="6" className="form-group" >
                                    <p className="term" > Phone Number </p>
                                    < input className="form-control" id="Phone" name="Phone" placeholder="(123)456-7890" type="text" required />

                                </Col>

                                <Col lg="6" className="form-group" >
                                    < p className="term" > ZIP Code </p>
                                    <input  className="form-control" id="Zip Code" name="Zip Code" placeholder="xxxxx" type="Zip Code" required />

                                </Col>
                            </Row>

                            <div className="mb-4" >
                                <p className="term" > Message </p>

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
                        <Row className="fs" >

                            <Col lg="6" >
                                <input className="form-control rounded" id="Email" name="Email" placeholder="Your email address" type="email" required />
                            </Col>

                            <Col lg="6" >
                                <button className="_btn" type="button" >Subscribe </button> </Col> </Row>

                                <br></br>
                

                    </footer>
                
                <h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               
                </h1>

                </Row>
                
               


            </Container>
            </div>
           

        );
    }
}
Contact.defaultProps = {
    action: ' /api/contact',
    method: 'post',
}
const Contactinfo = {
    Phone: '(800) 309-6753',
    DifPhone: '(312) 557-9319',
    Email: 'info@wini.com',
    DifEmail: 'vednor@wini.com',
};