import React, { useEffect, useState } from "react";
import { CONTACT_INFO, FORM_FIELDS } from "./constants";
import { getFormState } from "./helpers";
import "./styles.css";

const ContactUsForm = () => {
  const [formData, setFormData] = useState(() => getFormState(FORM_FIELDS));
  const [isDisabled, setDisabled] = useState(true);

  function handleFormDataChange(event, slug) {
    const newValue = event.target.value;
    setFormData((prev) => ({ ...prev, [slug]: newValue }));
  }

  function getIsDisabled() {
    let result = true;
    for (let field in formData) {
      result = result && formData[field] === "";
    }
    return result;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  useEffect(() => {
    setDisabled(getIsDisabled());
  }, [formData]);

  return (
    <section className="contact-us-wrapper">
      <aside className="contact-details">
        <div className="section-title">Contact Us</div>
        <div>
          {CONTACT_INFO.map((item) => (
            <div key={item.label}>
              <div className="department-name">{item.label}</div>
              <div className="contact-email-phone">
                {item.contactNumber} | {item.email}
              </div>
            </div>
          ))}
        </div>
      </aside>
      <form className="form-wrapper" onSubmit={handleFormSubmit}>
        <div className="contact-us-form">
          {FORM_FIELDS.map((item) => {
            if (item.htmlElement === "input") {
              return (
                <div key={item.slug} className="field-wrapper">
                  <div className="form-field-label">{item.label}</div>
                  <input
                    className={`contact-us-input ${
                      item.inputType === "number" ? "hide-number-spinner" : ""
                    }`}
                    type={item.inputType || "text"}
                    value={formData[item.slug]}
                    onChange={(event) => {
                      handleFormDataChange(event, item.slug);
                    }}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            }

            if (item.htmlElement === "textarea") {
              return (
                <div key={item.slug} className="textarea-field-wrapper">
                  <div className="form-field-label">{item.label}</div>
                  <textarea
                    className="contact-us-textarea"
                    value={formData[item.slug]}
                    onChange={(event) => {
                      handleFormDataChange(event, item.slug);
                    }}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            }

            return null;
          })}
        </div>
        <input
          type="submit"
          value="SUBMIT"
          disabled={isDisabled}
          className="submit-btn"
        />
      </form>
    </section>
  );
};

export default ContactUsForm;
