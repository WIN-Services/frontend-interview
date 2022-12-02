import React from 'react'
import SubscribePoster from './components/SubscribePoster'
import ContactForm from './components/ContactForm'

const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
};

const Contact = () => {
  return (
    <div style={styles}>
        <ContactForm></ContactForm>
        <SubscribePoster></SubscribePoster>
    </div>
  )
}

export default Contact