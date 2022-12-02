import React from "react";
import ContactusDetials from 'container/contactDetails/contactDetails';
import SuscribeMail from 'container/subscribeMail/subscribeMail';
import ContactForm from 'container/forms/forms';

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