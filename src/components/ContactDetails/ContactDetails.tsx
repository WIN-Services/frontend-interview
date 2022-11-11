import React from "react";
import styles from "./ContactDetails.module.scss";

const ContactDetails = () => {
  return (
    <div className={styles["details-container"]}>
      <h1 className={styles.header}>Contact Us</h1>
      <br />
      <div className={styles["inspection-header"]}>
        Inspections
        <p className={styles["inspection-contact"]}>
          (800) 309-6753 | info@wini.com
        </p>
      </div>

      <div className={styles["franchising-header"]}>
        Franchising
        <p className={styles["franchising-contact"]}>
          (800) 309-6753 | info@wini.com
        </p>
      </div>

      <div className={styles["vendor-header"]}>
        Vendors
        <p className={styles["vendor-contact"]}>
          (312) 557-9319 | vendors@wini.com
        </p>
      </div>
    </div>
  );
};

export { ContactDetails };
