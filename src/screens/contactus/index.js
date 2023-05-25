import React from 'react';
import {Button, TextField, Typography} from "@material-ui/core";
import {CONTACT_URL} from "../../config/api"

const ContactUs = () => {
    return <section className={"container contact-section-wrapper"}>
        <div className={"contact-section-info"}>
            <Typography variant={"h4"}>contact us</Typography>

            <div>
                <Typography variant={"subtitle1"}>inspections</Typography>
                <Typography variant={"subtitle2"}>(800) 309-6753 | info@wini.com</Typography>
            </div>

            <div>
                <Typography variant={"subtitle1"}>franchising</Typography>
                <Typography variant={"subtitle2"}>(800) 309-6753 | info@wini.com</Typography>
            </div>

            <div>
                <Typography variant={"subtitle1"}>vendors</Typography>
                <Typography variant={"subtitle2"}>(312) 557-9319 | vendors@wini.com</Typography>
            </div>
        </div>

        <form className={"contact-section-form"}
              noValidate autoComplete="off"
              onSubmit={(event) => {
                  event.preventDefault();

                  let data = {
                      name: event.target.elements.name.value,
                      email: event.target.elements.email.value,
                      phone: event.target.elements.phone.value,
                      zip: event.target.elements.zip.value,
                      message: event.target.elements.message.value,
                  }
                  fetch(CONTACT_URL, {
                      method: "POST",
                      body: JSON.stringify(data)
                  })
              }}>

            <div className={"font-item"}>
                <Typography variant={"subtitle1"}>Name</Typography>
                <TextField id={"name"} variant={"outlined"} placeholder={"Full Name"}/>
            </div>

            <div className={"font-item"}>
                <Typography variant={"subtitle1"}>email</Typography>
                <TextField id={"email"} variant={"outlined"} placeholder={"xyz@abc.com"}/>
            </div>
            <div className={"font-item"}>
                <Typography variant={"subtitle1"}>phone</Typography>
                <TextField id={"phone"} variant={"outlined"} placeholder={"(123) 456-7890"}/>
            </div>
            <div className={"font-item"}>
                <Typography variant={"subtitle1"}>zip</Typography>
                <TextField id={"zip"} variant={"outlined"} placeholder={"XXXXX"}/>
            </div>
            <div className={"font-item full-row"}>
                <Typography variant={"subtitle1"}>message</Typography>
                <TextField id={"message"} variant={"outlined"} multiline minRows={4}
                           placeholder={"Please type it here..."}/>
            </div>

            <div>
                <Button type={"submit"} color={"primary"} variant="contained">
                    Submit
                </Button>
            </div>
        </form>
    </section>;
};

export default ContactUs;