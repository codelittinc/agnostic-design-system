import React from 'react';
import getInput from './getInput';
import getButton from './getButton';
import { isEditable, isButton } from './componentVerification';

const getCustomComponent = customChildremProps => {
  const {
    child,
    idx,
    values,
    setValues,
    onSubmit,
    fieldsValidationState,
    setFieldsValidationState
  } = customChildremProps;

  if (
    !(isEditable(child) || isButton(child)) &&
    (!child.props.children || typeof child.props.children === 'string')
  ) {
    return child;
  }

  const { id } = child.props;
  const key = `${id}-${idx}`;

  const updateValidationState = (name, state) => {
    setFieldsValidationState({ ...fieldsValidationState, [name]: state });
  };

  const isFormValid = Object.values(fieldsValidationState).every(v => v);

  if (isEditable(child)) {
    return getInput(child, key, values, setValues, updateValidationState);
  } else if (isButton(child)) {
    return getButton(child, key, values, onSubmit, isFormValid);
  } else {
    const { children } = child.props;

    const customChildren = [children]
      .flat()
      .map((c, i) => getCustomComponent({ ...customChildremProps, child: c, key: `${key}-${i}` }));

    return React.cloneElement(child, {
      children: customChildren,
      key: key
    });
  }
};

export default customChildremProps => {
  const { children, ...props } = customChildremProps;
  return [children].flat().map((child, idx) => getCustomComponent({ ...props, child, idx }));
};
