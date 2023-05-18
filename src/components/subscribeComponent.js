import React from 'react';
import { styled } from '@mui/system';
import {Button, TextField} from "@mui/material";
import {theme} from "./contactUsComponent";

const SubscribeContainer = styled('div')({
    padding: '54px',
    backgroundColor: "#EEEEEE",
    borderRadius: "12px",
    textAlign: "center",
    marginTop: "61px",

    ".subs-heading": {
        fontFamily: 'Axiforma',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "36px",
        lineHeight: "160%",
        color: "#000000"
    },
    ".subs-para": {
        fontFamily: 'Axiforma',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "160%",
        color: "#000000",
        marginTop: "16px"
    },
    ".subs-form": {
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        marginTop: "44px",
        [theme.breakpoints.down('xs')]: {
            display: "block"
        },
    }
});

const SubscribeButton = styled(Button)({
    width: "209px",
    height: "60px",
    backgroundColor: "#D4A656",
    color: "#FFFFFF",
    fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontSize: "20px",
    lineHeight: "28px",
    textTransform: "capitalize",
    borderRadius: "10px"
});

const EmailTextField = styled(TextField)({
    width: "370px",
    height: "56px",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "10px",
    [theme.breakpoints.down('xs')]: {
        width: "100%",
        marginBottom: "20px"
    },
})

function SubscribeComponent(){
    return(
        <SubscribeContainer>
            <div className="subs-heading">Subscribe to our emails </div>
            <div className="subs-para">Enter your email address to receive the latest notifications, newsletters, and updates from WIN! </div>

            <div className="subs-form">
                <EmailTextField
                    id="email-address"
                    label="Your email address"
                    type="text"
                />
                <SubscribeButton variant="contained">Subscribe</SubscribeButton>
            </div>
        </SubscribeContainer>
    )
}

export default SubscribeComponent;
