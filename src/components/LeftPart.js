import React from 'react'
import styles from './LeftPart.module.css'

const LeftPart = () => {
  return (
    <div className={styles.box}>
        <h1 className={styles.mainHeading}>Contact Us</h1>
        <div className={styles.section}>
        <h3 className={styles.subHeding}>Inspections</h3>
        <p className={styles.text}>(800) 309-6753 | info@wini.com </p>
        </div>
        <div className={styles.section}>
        <h3 className={styles.subHeding}>Franchising</h3>
        <p className={styles.text}>(800) 309-6753 | info@wini.com </p>
        </div>
        <div className={styles.section}>
        <h3 className={styles.subHeding}>Vendors</h3>
        <p className={styles.text}>(312) 557-9319 | vendors@wini.com </p>
        </div>
    </div>
  )
}

export default LeftPart