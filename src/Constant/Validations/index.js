// Validations for mobile number
export const isMobileValid = (mobile) => {
  const mobile_regex = /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return mobile_regex.test(String(mobile));
};

// Validations for emails
export const isEmailValid = (email) => {
  const email_regex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email_regex.test(String(email));
};

// No whiteSpace start/end
export const whiteSpaceValid = (name) => {
  const spac_reg = /^[^\s].*/;
  return spac_reg.test(String(name));
};
