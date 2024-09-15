import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  InputAdornment,
  useMediaQuery,
  TextField,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import TextInput from "../common/TextInput/TextInput";
import CustomButton from "../common/Button/Button";
import json2mq from "json2mq";
import { useFormik } from "formik";
import * as Yup from "yup";
import { theme } from "../../theme";

/*Conatct us Form Component*/
export const ContactUsBox = (props) => {

  const matches = useMediaQuery(
    json2mq({
      minWidth: 1200,
    })
  );

  const matches1 = useMediaQuery(
    json2mq({
      minWidth: 500,
    })
  );

  return (
    <>  
          <Card
            sx={{
              borderRadius: "20px",
              padding: matches1 ? "52px 0px 21px 55px" : "32px 22px 32px 22px",
              background: "#FAFAFA",
              height:"100%"
            }}
          >
            
            <Box
              sx={{
                alignItems: matches ? "flex-start" : "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                gutterBottom
                sx={{
                  fontFamily: "Axiforma",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "25px",
                  lineHeight: "20px",
                }}
              >
                Contact Us
              </Typography>


              <Typography sx={{
                color: "#1D2B4F",
                fontSize: "18px",
                fontFamily: "Axiforma",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "160%"
              }}>
                Inspections
              </Typography>

              <Typography sx={{
                color: "#000",
                fontSize: "12px",
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px"
              }}>
              (800) 309-6753 | info@wini.com 
              </Typography>
              <Typography sx={{
                color: "#1D2B4F",
                fontSize: "18px",
                fontFamily: "Axiforma",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "160%"
              }}>
               Franchising
              </Typography>
              <Typography sx={{
                color: "#000",
                fontSize: "12px",
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px"
              }}>
              (800) 309-6753 | info@wini.com 
              </Typography>
              
              <Typography sx={{
                color: "#1D2B4F",
                fontSize: "18px",
                fontFamily: "Axiforma",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "160%"
              }}>
               Vendors
              </Typography>
              <Typography sx={{
                color: "#000",
                fontSize: "12px",
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px"
              }}>
              (312) 557-9319 | vendors@wini.com
              </Typography>
              
            </Box>
          </Card>
    </>
  );
};
