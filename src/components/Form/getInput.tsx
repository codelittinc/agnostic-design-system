import React from 'react';

export default (child, key, values, setValues, updateValidationState) => {
  const { name } = child.props;

  return React.cloneElement(child, {
    value: values[name] || '',
    onChange: e => {
      const { value } = e.target;
      const result = {
        ...values,
        [name]: value
      };
      setValues(result);
    },
    onStateChange: state => {
      updateValidationState(name, state);
    },
    key
  });
};
