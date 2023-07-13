import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { ContactUsProfileDetails } from "../components/contactus/conatctus-profile-details";
import Image from "next/image";
import { theme } from "../theme";
import json2mq from "json2mq";
import { ContactUsBox } from "../components/contactus/contactus-sidebox";
import TextInput from "../components/common/TextInput/TextInput";
import CustomButton from "../components/common/Button/Button";

const ContactUs = () => {
  //Contact us card values mapping

  const matches1 = useMediaQuery(
    json2mq({
      minWidth: 500,
    })
  );

  const matches3 = useMediaQuery(
    json2mq({
      minWidth: 1600,
    })
  );

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: "50px",
          paddingLeft: matches3 ? 3.8 : "15px",
          paddingRight: matches3 ? 4.8 : "15px",
        }}
      >
        <Grid
          container
          sx={{
            marginTop: "10px",
            borderRadius: "20px",
            color: "#fff",
            height: "70%",
          }}
          spacing={2}
        >
          <Grid item xl={4} lg={4} xs={12}>
            <ContactUsBox />
          </Grid>
          <Grid item xl={8} sm={12} lg={8} md={12} xs={12}>
            {/*Contact us Profile Details Component*/}
            <ContactUsProfileDetails />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            marginTop: "20px",
            height: "auto",
            backgroundColor: "#eee",
            paddingY: matches1 ? "52px": "40px",
            paddingX: matches1 ? "184px" : "25px",
            borderRadius: "20px",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#1D2B4F",
                fontSize: matches1 ? "36px": "24px",
                fontFamily: "Axiforma",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "160%",
              }}
            >
              {" "}
              Subscribe to our emails{" "}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: "18px",
                fontFamily: "Axiforma",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "160%",
                marginTop: "20px",
              }}
            >
              Enter your email address to receive the latest notifications,
              newsletters, and updates from WIN!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop:"33px",
              marginBottom:"30px"
            }}
          > 
          <Grid container  spacing={2} sx={{
            height:"56px" ,
            display:"flex",
            flexDirection:"row",
            justifyContent:"center"

          }}>
            <Grid item xs={12} lg={4} xl={4} sm={8} md={4} sx={{
              
            }}>
            <TextInput
              sx={{  
                backgroundColor:"#fff",
                borderRadius: "12px",

              }}
              fullWidth={true}
              // label="First Name"
              name="firstName"
              placeholder="Your email address"
              required
              variant="outlined"
              InputProps={{
                sx: { height: "43px" },
              }}
            /> 
            </Grid> 
            <Grid item xs={12} lg={2} xl={2} sm={4} md={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: matches1 ? "" : "center",
                borderRadius:"12px",
              }}
            >
              
                <CustomButton
                  color="secondary"
                  fullWidth={true}
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "#D4A656",
                    borderRadius:"12px",
                    height: "41px",
                    padding: "16px 32px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: "#fff",
                    }}
                  >
                    Subscribe
                  </Typography>
                </CustomButton>
             
            </Box>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

ContactUs.getLayout = (page) => <>{page}</>;

export default ContactUs;
