import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  btn: {
    background: "#005981",
    borderRadius: "10px",
    height: "58px",
    width: "129px",
    margin: "20px 0px 20px 18px",
    "&:hover": {
      background: "#005981",
    },
  },
  input: {
    boxShadow: "0px 2px 6px rgba(19, 18, 66, 0.07)",
    border: "2px solid #FFFFFF !importanr",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "white",
        outline: "none",
      },
    },
  },
});
const Form = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={5} m={1}>
          <Typography variant="h5" sx={{ alignItem: "left" }}>
            Name
          </Typography>

          <TextField
            type="text"
            variant="outlined"
            className={classes.input}
            placeholder="Full Name"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={5} m={1}>
          <Typography variant="h5" sx={{ alignItem: "left" }}>
            Email
          </Typography>

          <TextField
            placeholder="xyz@abc.com"
            fullWidth
            className={classes.input}
            required
          />
        </Grid>
        <Grid item xs={12} sm={5} m={1}>
          <Typography variant="h5" sx={{ alignItem: "left" }}>
            Phone Number
          </Typography>

          <TextField
            className={classes.input}
            placeholder="(123) 456-7890"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={5} m={1}>
          <Typography variant="h5" sx={{ alignItem: "left" }}>
            Zip Code
          </Typography>

          <TextField
            className={classes.input}
            required
            placeholder="XXXXX"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={10.3} m={1}>
          <Typography variant="h5" sx={{ alignItem: "left" }}>
            Message
          </Typography>
          <TextField
            multiline
            rows={10}
            fullWidth
            placeholder="Please type it in here..."
            maxRows={10}
            className={classes.input}
          />
        </Grid>
        <Box>
          <Button variant="contained" className={classes.btn}>
            Submit
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default Form;
