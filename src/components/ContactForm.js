import React from 'react'
import LeftPart from './LeftPart'
import RightPart from './RightPart'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div className={styles.ContactForm}>
        <LeftPart />
        <RightPart />
    </div>
  )
}

export default ContactForm