import React from 'react';

export default (child, key, values, setValues, updateValidationState) => {
  const { name, formValueName = 'value', formFieldType = 'text' } = child.props;

  let getValue;

  if (formFieldType === 'text') {
    getValue = e => {
      return e.target.value;
    };
  } else {
    getValue = item => {
      return item;
    };
  }

  return React.cloneElement(child, {
    [formValueName]: values[name] || '',
    onChange: arg => {
      const result = {
        ...values,
        [name]: getValue(arg)
      };
      setValues(result);
    },
    onValidationChange: state => {
      updateValidationState(name, state);
    },
    key
  });
};
