import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form() {
    const [formValues, setFormValues] = useState();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleSubmit = () => {
        fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then(() => {
            console.log("Posted data to backend :-", formValues);
        });
    };

    return (
        <Grid
            item
            xs={12}
            md={5}
            sx={{
                ml: { xs: 0, md: 3 },
                mr: { xs: 0, md: 3 },
                my: 7,
                justifyContent: { xs: "center", md: "start" },
            }}
        >
            <Grid container>
                <Grid item xs={12} md={7} sx={{ px: 1 }}>
                    <div className="py-20">
                        <div className="pb-10 form-label">Name</div>
                        <TextField
                            fullWidth
                            name="name"
                            placeholder="Full Name"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="py-20">
                        <div className="pb-10 form-label">Phone Number</div>
                        <TextField
                            fullWidth
                            name="number"
                            placeholder="(123) 456-7890"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={5} sx={{ px: 1 }}>
                    <div className="py-20">
                        <div className="pb-10 form-label">Email</div>
                        <TextField
                            fullWidth
                            name="email"
                            placeholder="xyz@abc.com"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="py-20">
                        <div className="pb-10 form-label">ZIP Code</div>
                        <TextField
                            fullWidth
                            name="zip"
                            placeholder="XXXXX"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sx={{ px: 1 }}>
                    <div className="py-20">
                        <div className="pb-10 form-label">Message</div>
                        <TextField
                            name="message"
                            placeholder="Please type it in here..."
                            onChange={(e) => handleInputChange(e)}
                            multiline
                            rows={4}
                            sx={{ width: { xs: "100%", md: "90%" } }}
                        />
                    </div>
                </Grid>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        mx: 1,
                        py: 2,
                        px: 4,
                        borderRadius: "10px",
                        backgroundColor: "#005981",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "160%",
                        letterSpacing: "0.46px",
                    }}
                >
                    SUBMIT
                </Button>
            </Grid>
        </Grid>
    );
}
