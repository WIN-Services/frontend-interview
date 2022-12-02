import React from "react";
import ContactusDetials from 'container/contactDetails/index';
import SuscribeMail from 'container/suscribeMail/index';
import ContactForm from 'container/forms/index';

function ContactUs() {
    return (
        <>
            <div className="content_body">
                <ContactusDetials />
                <ContactForm />
            </div>
            <SuscribeMail />
        </>
    )
}

export default ContactUs;