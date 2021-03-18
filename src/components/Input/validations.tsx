const validate = (type, test, value) =>
  type === 'RegExp' ? new RegExp(test).test(value) : test(value);

const requiredValidation = {
  type: 'RegExp',
  test: /\S+/,
  invalidMessage: 'This field is required.'
};

const getAllValidations = (validations, required) =>
  required ? [requiredValidation, ...validations] : validations;

export const isValid = (value, validations, required) => {
  const allValidations = getAllValidations(validations, required);
  const valid = allValidations.every(validation => {
    const { type, test } = validation;
    return validate(type, test, value);
  });

  return valid;
};

export const getInvalidMessage = (value, validations, required) => {
  const allValidations = getAllValidations(validations, required);
  return allValidations.find(validation => {
    const { type, test } = validation;
    return !validate(type, test, value);
  })?.invalidMessage;
};
