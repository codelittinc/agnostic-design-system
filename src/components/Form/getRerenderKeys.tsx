import React from 'react';

export default (values, fieldsValidationState, names, children) => {
  const v = {};
  names.forEach(c => {
    v[c] = values[c] || '';
  });

  const n = {};
  names.forEach(c => {
    n[c] = fieldsValidationState[c];
  });

  const childrenProps = React.Children.toArray(children).map(
    child => React.isValidElement(child) && child.props
  );

  return [...names, ...Object.values(v), ...Object.values(n), ...childrenProps];
};
