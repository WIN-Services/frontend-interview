import React from "react";
import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  btn: {
    background: "#D4A656",
    borderRadius: "10px",
    margin: "10px 0px 10px 10px",
    height: "55px",
    width: "209px",
    "&:hover": {
      background: "#D4A656",
    },
  },
  input: {
    boxShadow: "0px 2px 6px rgba(19, 18, 66, 0.07)",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    maxWidth: "370px",
    width: "290px",
    margin: "10px 0px",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
});
const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Box
        sx={{
          bgcolor: "#EEEEEE",
          borderRadius: "5px",
          marginTop: "50px",
          marginBottom: "50px",
          // height: "309px",
          paddingBottom: "30px",
        }}
      >
        <Box>
          <Typography variant="h2">Subscribe to our emails</Typography>
          <Typography variant="semiBold">
            Enter your email address to receive the latest notifications,
            newsletters, and updates from WIN!{" "}
          </Typography>
        </Box>
        <Grid item>
          <TextField
            className={classes.input}
            type="email"
            placeholder="Your email address"
            // fullWidth
            variant="outlined"
            required
          />
          <Button className={classes.btn} variant="contained">
            Subscribe
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
