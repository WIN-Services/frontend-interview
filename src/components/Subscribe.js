import { Button, Grid, TextField } from "@mui/material";
import React from "react";

export default function Subscribe() {
    return (
        <Grid
            item
            xs={12}
            sx={{
                m: { xs: 1, md: 4 },
                px: { xs: 1, md: 23 },
                py: 6,
                backgroundColor: "#EEE",
                textAlign: "center",
                borderRadius: "12px",
            }}
        >
            <div className="pb-16 subscribe-heading">Subscribe to our emails</div>
            <div className="subscribe-subheading">
                Enter your email address to receive the latest notifications, newsletters, and updates from
                WIN!
            </div>
            <Grid container sx={{ justifyContent: "center", pt: 5, alignItems: "center" }}>
                <TextField
                    id="outlined-basic"
                    size="small"
                    placeholder="Your email address"
                    sx={{ mr: { xs: 0, md: 3 }, mb: { xs: 2, md: 0 }, backgroundColor: "#FFF" }}
                />
                <Button
                    variant="contained"
                    sx={{
                        py: 2,
                        px: 7,
                        borderRadius: "10px",
                        border: "2px solid #D4A656",
                        backgroundColor: "#D4A656",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "28px",
                    }}
                >
                    Subscribe
                </Button>
            </Grid>
        </Grid>
    );
}
