import React from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import {SUBSCRIBE_URL} from "../../config/api";

const Footer = () => {
    const submitForm = (event) => {
        event.preventDefault();

        fetch(SUBSCRIBE_URL, {
            method: "POST",
            body: JSON.stringify({
                email: event.target.elements["sub-email"].value,
            })
        })
    }

    return (
        <section className={"container subscribe-section"}>
            <Typography variant={"h2"}>Subscribe to our emails</Typography>
            <Typography variant={"h3"}>
                Enter your email address to receive the latest notifications, newsletters, and updates from WIN!
            </Typography>

            <form noValidate autoComplete="off" className={"subscribe-form"} onSubmit={submitForm}>
                <TextField placeholder={"Your email address"} id={"sub-email"} variant={"outlined"}/>
                <Button type={"submit"} color={"secondary"} variant="contained">Subscribe</Button>
            </form>
        </section>
    );
};

export default Footer;