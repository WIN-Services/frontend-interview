import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  box: {
    background: "#FAFAFA",
    borderRadius: "20px",
    margin: "0px 20px 20px 20px ",
  },
});
const ContactUs = () => {
  const classes = useStyles();

  return (
    <div>
      <Box
        className={classes.box}
        sx={{
          height: {
            xs: "280px",
            md: "688px",
          },
        }}
      >
        <Typography variant="h3">Contact Us</Typography>
        <Box>
          <Typography variant="h4">Inception</Typography>
          <Typography variant="p">(800) 309-6753 | info@wini.com</Typography>
          <Typography variant="h4">Franchising</Typography>
          <Typography variant="p">(800) 309-6753 | info@wini.com</Typography>
          <Typography variant="h4">Vendors</Typography>
          <Typography variant="p">(312) 557-9319 | vendors@wini.com</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
