import React from 'react';
import { SUBMIT_TYPE } from '../Button';

export default (child, key, values, onSubmit, isFormValid) => {
  const { type } = child.props;

  if (type === SUBMIT_TYPE) {
    return React.cloneElement(child, {
      onClick: () => onSubmit(values),
      key,
      disabled: !isFormValid
    });
  } else {
    return React.cloneElement(child, { key });
  }
};
