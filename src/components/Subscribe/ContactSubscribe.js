import React from "react";

// import Material-UI components 
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

const SubscribeInputStyle = styled(InputBase)(({ theme }) => ({

    width: "auto",
    padding: "10px 12px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
    ]),
}));

function ContactSubscribe() {
    return (
        <div>
            <Box sx={ { pt: 3, pb: 3, borderRadius: "10px" } }>
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 }>
                        <Typography
                            variant="h4"
                            align="center"
                            sx={ {
                                color: "black",
                                fontWeight: "500",
                            } }
                        >
                            Subscribe to our emails
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 }>
                        <Typography
                            variant="subtitle2"
                            gutterBottom
                            align="center"
                            sx={ {
                                color: "black",
                                fontWeight: "400",
                            } }
                        >
                            Enter your email address to receive the latest notifications,
                            newsletters and updates from WIN!
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={ 12 }
                        align="center"
                        sx={ {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        } }
                    >
                        <FormControl variant="standard">
                            <SubscribeInputStyle placeholder="Your email address" />
                        </FormControl>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={ { pt: 1.4, pb: 1, ml: 5, borderRadius: "10px" } }
                            style={ { background: "#d4a656" } }
                            size="large"
                        >
                            Subscribe
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default ContactSubscribe;
