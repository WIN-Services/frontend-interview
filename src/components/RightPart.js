import React from 'react'
import styles from './RightPart.module.css'

const RightPart = () => {
  return (
    <div className={styles.box}>
        <form action="">
          <div className={styles.row}>
            <div className={styles.col}>
              <div className="lab">Name</div>
              <input  className={styles.inputbox} placeholder="Full Name" type="text" name="Name" id="name" />
            </div>
            <div className={styles.col}>
              <div className="lab">Email</div>
              <input className={styles.inputbox} placeholder="xyz@abc.com" type="text" name="Name" id="name" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className="lab">Phone Number</div>
              <input className={styles.inputbox} placeholder="(123) 456-7890" type="text" name="Name" id="name" />
            </div>
            <div className={styles.col}>
              <div className="lab">ZIP Code</div>
              <input className={styles.inputbox} type="text" placeholder='xxxx' name="Name" id="name" />
            </div>
          </div>
          <div className={styles.col}>
              <div className="lab">Message</div>
              <textarea className={styles.textbox} name="message" placeholder='Please type it in here...' id="msg" cols="25" rows="10"></textarea>
          </div>
          <button className={styles.btn}>Submit</button>


        </form>
    </div>
  )
}

export default RightPart