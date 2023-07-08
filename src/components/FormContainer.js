import { Grid } from "@mui/material";
import React from "react";
import Contact from "./Contact";
import Form from "./Form";

export default function FormContainer() {
    return (
        <Grid
            container
            sx={{
                m: { xs: 1, md: 4 },
                boxShadow:
                    "0px 98px 66px 0px rgba(19, 18, 66, 0.02), 1px 4px 104px 0px rgba(20, 20, 43, 0.04), 0px 54px 54px 0px rgba(74, 58, 255, 0.02)",
                borderRadius: "20px",
            }}
        >
            <Contact />
            <Form />
        </Grid>
    );
}
