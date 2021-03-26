import React from 'react';

export default (child, key, values, onSubmit, isFormValid) => {
  return React.cloneElement(child, {
    onClick: () => onSubmit(values),
    key,
    disabled: !isFormValid
  });
};
