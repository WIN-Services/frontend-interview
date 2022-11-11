import React from "react";
import styles from "./InputField.module.scss";

type Props = {
  name: string;
  label: string;
  id: string;
  type: string;
  placeholder: string;
  maxLength?: number | undefined;
  disabled?: boolean | undefined;
  errorCondition?: any;
  errorMessage?: any;
  register?: any;
};

const InputField: React.FC<Props> = ({
  type,
  name,
  id,
  label,
  placeholder,
  disabled,
  errorCondition,
  errorMessage,
  maxLength,
  register,
}) => {
  return (
    <div className={styles["input-field--container"]}>
      <label htmlFor={name} className={styles[`${name}-label`]}>
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        id={id}
        className={styles.name}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        required
      />
      {errorCondition && (
        <div className={styles["error-message"]}>{errorMessage}</div>
      )}
    </div>
  );
};

export { InputField };
