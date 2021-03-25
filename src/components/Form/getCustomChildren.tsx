import React from 'react';
import getInput from './getInput';
import getButton from './getButton';

const BUTTON_TYPE = 'Button';

// @TODO: Improve this validation to allow other components
const isInput = component => {
  const { type } = component;
  const name = type.displayName || type.name;
  return /.*[iI]nput.*/.test(name) || name === 'TextArea';
};
const isButton = component => {
  return BUTTON_TYPE === component.type.displayName || BUTTON_TYPE === component.type.name;
};

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
    !(isInput(child) || isButton(child)) &&
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

  if (isInput(child)) {
    const { name, required } = child.props;

    if (!Object.keys(fieldsValidationState).includes(name) && required) {
      updateValidationState(name, false);
    }

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
  return children.map((child, idx) => getCustomComponent({ ...props, child, idx }));
};
