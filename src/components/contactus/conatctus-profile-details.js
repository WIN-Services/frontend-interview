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
export const ContactUsProfileDetails = (props) => {
  const [contactCard, setContatCard] = useState(true);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phoneNumber: "",
      zipCode: "",
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().max(255).required("Message is required"),
      firstName: Yup.string().max(255).required("Name is Required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      zipCode: Yup.string().max(6).required("Zip Code is Required"),
    }),
    enableReinitialize: true,
    onSubmit: (values, { setSubmitting }) => {},
  });

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
      <form onSubmit={formik.handleSubmit}>
        {contactCard && (
          <Card
            sx={{
              borderRadius: "12px",
              padding: matches1 ? "52px 0px 0px 55px" : "32px 22px 32px 22px",
            }}
          >
            {/* <CardContent> */}
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
                  fontFamily: matches1 ? "Poppins" : "Inter",
                  fontStyle: "normal",
                  fontWeight: matches1 ? 600 : 700,
                  fontSize: "30px",
                  lineHeight: "20px",
                }}
              >
                Get in touch!
              </Typography>
            </Box>

            <Grid
              container
              sx={{
                marginTop: "55px",
                padding: matches1 ? "0px 61px 0px 11px " : "",
              }}
              spacing={matches1 ? 1 : ""}
            >
              <Grid
                container
                sx={{
                  dispaly: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // marginTop: "10px",
                }}
                spacing={matches1 ? 3 : "16px"}
              >
                <Grid item md={5.5} xs={12} sm={12} lg={6} xl={6}>
                  <Typography
                    sx={{
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "18px",
                      color: "#000",
                      // marginTop: "5px",
                    }}
                  >
                    Name
                    <span
                      style={{
                        color: "red",
                        paddingTop: "2px",
                        paddingLeft: "1px",
                      }}
                    >
                      *
                    </span>
                  </Typography>
                  <TextInput
                    sx={{
                      borderRadius: "6px",
                      marginTop: "5px",
                    }}
                    fullWidth={true}
                    // label="First Name"
                    name="firstName"
                    placeholder="Name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                    value={formik.values.firstName}
                    variant="outlined"
                    error={Boolean(
                      formik.touched.firstName && formik.errors.firstName
                    )}
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: "#000" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={5.5} xs={12} sm={12} lg={6} xl={6}>
                  <Typography
                    sx={{
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "18px",
                      color: "#000",
                      // marginTop: "5px",
                    }}
                  >
                    Email
                    <span
                      style={{
                        color: "red",
                        paddingTop: "2px",
                        paddingLeft: "1px",
                      }}
                    >
                      *
                    </span>
                  </Typography>
                  <TextInput
                    sx={{
                      borderRadius: "6px",
                      marginTop: "5px",
                    }}
                    fullWidth={true}
                    // label="Last Name"
                    name="email"
                    placeholder="Email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    required
                    value={formik.values.email}
                    variant="outlined"
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: "#000" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  dispaly: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
                spacing={matches1 ? 3 : "16px"}
              >
                <Grid item md={5.5} xs={12} sm={12} lg={6} xl={6}>
                  <Typography
                    sx={{
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "18px",
                      color: "#000",
                      // marginTop: "5px",
                    }}
                  >
                    Phone Number
                  </Typography>
                  <TextField
                    sx={{
                      marginTop: "5px",
                    }}
                    fullWidth={true}
                    label=""
                    placeholder="Mobile Number"
                    id="fullWidth"
                    variant="outlined"
                    value={formik.values.phoneNumber}
                    name="phoneNumber"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={Boolean(
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    )}
                    helperText={
                      <span
                        style={{
                          zIndex: 1000,
                          marginBottom: "-80px",
                          position: "absolute",
                        }}
                      >
                        {formik.touched.phoneNumber &&
                          formik.errors.phoneNumber}
                      </span>
                    }
                  />
                </Grid>
                <Grid item md={5.5} xs={12} sm={12} lg={6} xl={6}>
                  <Typography
                    sx={{
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "18px",
                      color: "#000",
                      // marginTop: "5px",
                    }}
                  >
                    Zip Code
                    <span
                      style={{
                        color: "red",
                        paddingTop: "2px",
                        paddingLeft: "1px",
                      }}
                    >
                      *
                    </span>
                  </Typography>
                  <Grid
                    container
                    // spacing={""}
                    sx={{
                      marginTop: "5px",
                    }}
                  >
                    {/* <Grid xs={1}></Grid> */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth={true}
                        label=""
                        placeholder="XXX XXX"
                        id="fullWidth"
                        variant="outlined"
                        value={formik.values.zipCode}
                        name="zipCode"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={Boolean(
                          formik.touched.zipCode && formik.errors.zipCode
                        )}
                        helperText={
                          <span
                            style={{
                              zIndex: 1000,
                              marginBottom: "-80px",
                              position: "absolute",
                            }}
                          >
                            {formik.touched.zipCode && formik.errors.zipCode}
                          </span>
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                container
                sx={{
                  dispaly: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginBottom: matches1 ? "" : "34px",
                }}
                spacing={matches1 ? 3 : "8px"}
              >
                <Grid item md={12} xs={12} lg={12} sm={12} xl={12}>
                  <Typography
                    sx={{
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#000",
                      marginTop: "5px",
                    }}
                  >
                    Message
                    <span
                      style={{
                        color: "red",
                        paddingTop: "2px",
                        paddingLeft: "1px",
                      }}
                    >
                      *
                    </span>
                  </Typography>
                  <TextInput
                    sx={{
                      borderRadius: "6px",
                      marginTop: "5px",
                    }}
                    error={Boolean(
                      formik.touched.message && formik.errors.message
                    )}
                    helperText={formik.touched.message && formik.errors.message}
                    fullWidth={true}
                    multiline={true}
                    rows={4}
                    maxRows={4}
                    // label="Please explain your issue or query"
                    name="message"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="textarea"
                    value={formik.values.message}
                    variant="outlined"
                    placeholder="Please type it in here"
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* </CardContent> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: matches1 ? "" : "center",
                borderRadius: "10px",
                my: matches1 ? "30px" : "",
              }}
            >
              <Grid
                item
                xs={12}
                lg={2}
                xl={2}
                sm={2}
                md={2}
                // sx={{ justifyContent: "center" }}
              >
                <CustomButton
                  color="secondary"
                  fullWidth={true}
                  disabled={formik.isSubmitting}
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "#005981",

                    height: "41px",
                    padding: "16px 32px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Axiforma",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "160%",
                      textTransform: "uppercase",
                      color: "#fff",
                    }}
                  >
                    SUBMIT
                  </Typography>
                </CustomButton>
              </Grid>
            </Box>
          </Card>
        )}
      </form>

      {!contactCard && (
        <Card
          sx={{
            borderRadius: "12px",
            backgroundColor: theme.palette.primary.dark,
            height: "auto",
            width: "auto",
            padding: matches1 ? "24px" : "",
          }}
        >
          <CardContent
            sx={{
              padding: matches1 ? "" : "40px 31.5px 40px 31.5px",
            }}
          >
            <Box
              sx={{
                // alignItems: matches ? "flex-start" : "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                // color="textPrimary"
                // gutterBottom
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "30px",
                  lineHeight: matches1 ? "20px" : "34px",
                  color: "#fff",
                  textAlign: matches1 ? "" : "center",
                }}
              >
                Thanks for getting in touch!
              </Typography>
              <Typography
                align={matches ? " " : "center"}
                // color="textPrimary"
                // gutterBottom
                // variant="h6"
                // paragraph
                sx={{
                  fontFamily: "Axiforma",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  mt: matches1 ? "19px" : "38px",
                  overflow: "auto",
                  color: "#E3E3E3",
                  marginBottom: matches1 ? "30px" : "38px",
                }}
              >
                We’ll try to answer your query as soon as we can! In the
                meantime, feel free to visit out FAQ section for more
                information.
              </Typography>
            </Box>
            <Box sx={{ textAlign: matches1 ? " " : "center" }}>
              <CustomButton
                color="secondary"
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  padding: matches1
                    ? "10px 30px 10px 30px"
                    : "10px 30px 10px 30px",
                  // textAlign: "center",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // alignContent: "center",
                }}
                onClick={() => setContatCard(!contactCard)}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: matches1 ? "16px" : "14px",
                    lineHeight: "20px",
                    color: theme.palette.primary.dark,
                    textAlign: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  Enquire Again
                </Typography>
              </CustomButton>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
};
