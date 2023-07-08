import React from "react";
import "../App.css";
import { Box, Grid } from "@mui/material";
import FormContainer from "./FormContainer";
import Subscribe from "./Subscribe";

function App() {
    return (
        <Box
            sx={{
                display: "flex",
                m: { xs: 1, md: 12 },
                backgroundColor: "#FEFEFE",
            }}
        >
            <Grid container>
                <FormContainer />
                <Subscribe />
            </Grid>
        </Box>
    );
}

export default App;
