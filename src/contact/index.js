import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../content_option";


export default function ContactUs() {


    return ( <
        Container className = "Cont" >


        <
        Row className = "sec_sp" >
        <
        Col lg = "5"
        className = "mb-5" >
        <
        h3 className = "color_sec py-4" > Contact Us < /h3> <
        address >
        <
        strong > Inspections < /strong>{" "} <
        br / >
        <
        a href = { `mailto:${contactConfig.YOUR_EMAIL}` } > { contactConfig.YOUR_EMAIL } <
        /a> | {contactConfig.YOUR_FONE} <
        br / >
        <
        br / >
        <
        strong > Franchising < /strong>{" "} <
        br / >
        <
        a href = { `mailto:${contactConfig.YOUR_EMAIL}` } > { contactConfig.YOUR_EMAIL } <
        /a> | {contactConfig.YOUR_FONE} <
        br / >
        <
        br / >
        <
        strong > Vendors < /strong>{" "} <
        br / >
        <
        a href = { `mailto:${contactConfig.YOUR_EMAIL}` } > { contactConfig.YOUR_EMAIL } <
        /a> | {contactConfig.YOUR_FONE} <
        /address>

        <
        /Col> <
        Col lg = "7"
        className = "d-flex align-items-center mb-6" >
        <
        form className = "contact__form w-100" >
        <
        Row >
        <
        Col lg = "6"
        className = "form-group" >
        <
        p className = "tar" > Name < /p> <
        input className = "form-control"
        id = "name"
        name = "name"
        placeholder = "Name"
        type = "text"
        required /
        >
        <
        /Col> <
        Col lg = "6"
        className = "form-group" >
        <
        p className = "tar" > Email < /p> <
        input className = "form-control rounded-0"
        id = "email"
        name = "email"
        placeholder = "Email"
        type = "email"
        required /
        >
        <
        /Col> <
        Col lg = "6"
        className = "form-group" >
        <
        p className = "tar" > Phone Number < /p> <
        input className = "form-control"
        id = "Phone Number"
        name = "Phone Number"
        placeholder = "(123)456-789"
        type = "text"
        required /
        >
        <
        /Col> <
        Col lg = "6"
        className = "form-group" >
        <
        p className = "tar" > Zip Code < /p> <
        input className = "form-control rounded-0"
        id = "Zip Code"
        name = "Zip Code"
        placeholder = "xxxx"
        type = "Zip Code"
        required /
        >
        <
        /Col> <
        /Row> <
        div className = "mb-4" >
        <
        p className = "tar" > Message < /p> <
        textarea className = "form-control rounded-0"
        id = "message"
        name = "message"
        placeholder = "Please type it in here..."
        rows = "5"
        required >
        < /textarea> <
        /div>

        <
        br / >
        <
        Row className = "mb-4" >
        <
        Col lg = "12"
        className = "form-group " >
        <
        button className = "btn "
        type = "submit" >
        Submit <
        /button> <
        /Col> <
        /Row> <
        /form> <
        /Col> <
        /Row> <
        br / >
        <
        br / >
        <
        Row >
        <
        footer >
        <
        h4 > Subscribe to our emails < /h4> <
        p > Enter your email address to recieve the latest notifictions, newsleers and updates from WIN! < /p> <
        Row className = "Foot" >
        <
        Col lg = "6" >
        <
        input className = "form-control rounded"
        id = "email"
        name = "email"
        placeholder = "Your email address"
        type = "email"
        required


        /
        >
        <
        /Col> <
        Col lg = "6" >
        <
        button className = "btn ac_btn"
        type = "submit" >
        Subscribe <
        /button> <
        /Col> <
        /Row> 

        <
        /footer> <
        /Row> <
        /Container>
    );
}