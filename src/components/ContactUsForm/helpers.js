export function getFormState(formFields) {
  const state = {};
  for (let field of formFields) {
    state[field.slug] = "";
  }
  return state;
}
