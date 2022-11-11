import React from "react";
import { useForm } from "react-hook-form";

import { InputField } from "../InputField";
import styles from "./EmailSubscription.module.scss";

const EmailSubscription = () => {
  const { register } = useForm();
  return (
    <section className={styles.container}>
      <p className={styles.header}> Subscribe to our emails </p>
      <p className={styles["sub-header"]}>
        Enter your email address to receive the latest notifications,
        newsletters, and updates from WIN!{" "}
      </p>
      <form className={styles["subscribe-form"]}>
        <InputField
          name="Email Address"
          label=""
          type="email"
          id="Email Address"
          placeholder="Your Email Address"
          register={register}
        />
        <button className={styles["subscribe-button"]} type="button">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export { EmailSubscription };
