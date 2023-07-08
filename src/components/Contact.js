import { Grid } from "@mui/material";
import React from "react";

export default function Contact() {
    // This array of objects can come from the backednd api.
    const contactData = [
        {
            heading: "Inspections",
            number: "(800) 309-6753 | info@wini.com",
        },
        {
            heading: "Franchising",
            number: "(800) 309-6753 | info@wini.com",
        },
        {
            heading: "Vendors",
            number: "(312) 557-9319 | vendors@wini.com",
        },
    ];

    return (
        <Grid
            item
            xs={12}
            md={5}
            sx={{
                mx: { xs: 1, md: 3 },
                my: 3,
                px: { xs: 2, md: 4 },
                py: 3,
                backgroundColor: "#FAFAFA",
                borderRadius: "20px",
            }}
        >
            <div className="contact-us">Contact Us</div>
            {contactData.map(({ heading, number }) => (
                <div key={heading}>
                    <div className="contact-heading">{heading}</div>
                    <div className="number">{number}</div>
                </div>
            ))}
        </Grid>
    );
}
