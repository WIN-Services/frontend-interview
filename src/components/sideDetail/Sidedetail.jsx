import React from "react";

// import Material-UI components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./Sidedetail.css";

const Sidedetail = () => {
  return (
    <div className="info-container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "black",
            fontFamily: "Axiforma",
            fontWeight: "700",
            fontStyle: "normal",
            mb: 3,
          }}
        >
          {" "}
          Contact Us
        </Typography>

        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{
            fontSize: "18px",
            fontFamily: "Axiforma",
            fontWeight: "600",
            fontStyle: "normal",
            color: "#1D2B4F",
          }}
        >
          Inspection
        </Typography>
        <Typography
          sx={{
            fontFamily: "Rubik",
            textTransform: "lowercase",
          }}
          variant="overline"
          gutterBottom
        >
          (800) 809-6753 | info@wini.com
        </Typography>

        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{
            fontSize: "18px",
            fontFamily: "Axiforma",
            fontWeight: "600",
            fontStyle: "normal",
            color: "#1D2B4F",
          }}
        >
          Franchising
        </Typography>
        <Typography
          sx={{
            fontFamily: "Rubik",
            textTransform: "lowercase",
          }}
          variant="overline"
          gutterBottom
        >
          (800) 809-6753 | info@wini.com
        </Typography>

        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{
            fontSize: "18px",
            fontFamily: "Axiforma",
            fontWeight: "600",
            fontStyle: "normal",
            color: "#1D2B4F",
          }}
        >
          Vendors
        </Typography>
        <Typography
          sx={{
            fontFamily: "Rubik",
            textTransform: "lowercase",
          }}
          variant="overline"
          gutterBottom
        >
          (800) 809-9319 | vendors@wini.com
        </Typography>
      </Box>
    </div>
  );
};

export default Sidedetail;
