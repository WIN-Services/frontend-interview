// Validations for mobile number
export const isMobileValid = (mobile) => {
  const mobile_regex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
  return mobile_regex.test(String(mobile));
};

// Validations for emails
export const isEmailValid = (email) => {
  const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return email_regex.test(String(email));
};

// Validations for zip code
export const isZipCodeValid = (zipcode) => {
  const zipcode_regex = /^\d{5}$/;
  return zipcode_regex.test(String(zipcode));
};

// No whiteSpace start/end
export const whiteSpaceValid = (name) => {
  const spac_reg = /^[^\s].*/;
  return spac_reg.test(String(name));
};
