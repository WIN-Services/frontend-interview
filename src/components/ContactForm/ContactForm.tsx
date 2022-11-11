import React from "react";
import { useForm } from "react-hook-form";

import { ContactDetails } from "../ContactDetails";
import { InputField } from "../InputField";
import styles from "./ContactForm.module.scss";

const FAKE_API = "https://jsonplaceholder.typicode.com/posts";

const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await fetch(FAKE_API, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setSubmitted(true);
      console.log(data);
      reset();
    } catch (error: any) {
      setError("submit", { type: "submitError" }, { shouldFocus: true });
    }
  };

  const showSubmitError = (msg: any) => <p className="msg-error">{msg}</p>;

  return (
    <section className={styles.wrapper}>
      <div className={styles["contact-container"]}>
        <div className={styles["contact-details"]}>
          <ContactDetails />
        </div>
        <div className={styles["form-container"]}>
          <form
            className={styles["contact-form"]}
            onSubmit={handleSubmit(onSubmit)}
            method="post"
          >
            <InputField
              name="Name"
              label="Name"
              type="text"
              id="Name"
              register={register}
              placeholder="Full Name"
              disabled={isSubmitting}
              errorCondition={errors.Name}
              errorMessage={errors.Name?.message}
            />
            <InputField
              name="Email"
              label="Email"
              type="email"
              id="Email"
              register={register}
              placeholder="xyz@abc.com"
              disabled={isSubmitting}
              errorCondition={errors.Email}
              errorMessage={errors.Email?.message}
            />
            <InputField
              name="PhoneNumber"
              label="Phone Number"
              type="tel"
              id="PhoneNumber"
              register={register}
              placeholder="(123) 456-7890"
              disabled={isSubmitting}
              errorCondition={errors.PhoneNumber}
              errorMessage={errors.PhoneNumber?.message}
              maxLength={13}
            />
            <InputField
              name="ZIPCode"
              label="ZIP Code"
              type="number"
              id="ZIPCode"
              register={register}
              placeholder="XXXXX"
              disabled={isSubmitting}
              errorCondition={errors.ZIPCode}
              errorMessage={errors.ZIPCode?.message}
            />
            <div className={styles["message-box"]}>
              <label htmlFor="">Message</label>
              <textarea
                id="message"
                placeholder="Please type it in here..."
                typeof="text"
                cols={30}
                rows={12}
                {...register("message")}
                disabled={isSubmitting}
                required
              />
            </div>
            <button
              className={styles["submit-button"]}
              type="submit"
              disabled={isSubmitting}
            >
              SUBMIT
            </button>
          </form>
          <span className="form-submitted">
            {submitted && (
              <p className={styles["form-submitted--text"]}>Submitted</p>
            )}
          </span>
        </div>

        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
    </section>
  );
};

export { ContactForm };
