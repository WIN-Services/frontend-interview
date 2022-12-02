import React from 'react'
import styles from './SubscribePoster.module.css'
const SubscribePoster = () => {
  return (
    <div className={styles.poster}>
        <h2 className={styles.heading}>Subscribe to our emails</h2>
        <p>Enter your email address to receive the latest notifications, newsletters, and updates from WIN!</p>
        <div className={styles.inputSection}>
            <input className={styles.input} type="text" placeholder='Your email address' />
            <button className={styles.btn}>Subscribe</button>
        </div>
    </div>
  )
}

export default SubscribePoster