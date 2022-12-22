import { createTheme } from "@mui/material/styles";

let theme = createTheme();
theme = createTheme({
  typography: {
    fontFamily: "Work Sans",
    h2: {
      // height: "58px",
      fontFamily: "Axiforma",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "160%",
      color: "#000000",
      margin: "10px 0px",
      paddingTop: "10px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
    },
    h3: {
      width: "144px",
      height: "40px",
      fontFamily: "Axiforma",
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "25px",
      lineHeight: "160%",
      color: "#000000",
      marginLeft: "10px",
      paddingTop: "10px",
    },
    h4: {
      width: "125px",
      height: "29px",
      fontFamily: "Axiforma",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "160%",
      color: "#1D2B4F",
      textAlign: "start",
      margin: "10px 20px 10px 20px",
    },
    h5: {
      fontSize: "18px",
      textAlign: "start",
      marginBottom: "10px",
    },
    p: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      display: "block",
      color: "#000000",
      textAlign: "start",
      justifyContent: "start",
      margin: "10px 20px 10px 20px",
    },
    semiBold: {
      fontFamily: "Axiforma",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "160%",
      margin: "10px 0px",
      color: "#000000",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      padding: "10px",
    },
  },
});

export default theme;
