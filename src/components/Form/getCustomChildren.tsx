import React from 'react';
import getInput from './getInput';
import getButton from './getButton';

// @TODO: add the other input types
const INPUT_TYPES = ['Input', 'EmailInput'];

const BUTTON_TYPE = 'Button';

const isInput = component => INPUT_TYPES.includes(component.type.displayName);
const isButton = component => BUTTON_TYPE === component.type.displayName;

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
    const children = child.props.children.map((c, i) =>
      getCustomComponent({ ...customChildremProps, child: c, key: `${key}-${i}` })
    );

    return React.cloneElement(child, {
      children,
      key: key
    });
  }
};

export default customChildremProps => {
  const { children, ...props } = customChildremProps;
  return children.map((child, idx) => getCustomComponent({ ...props, child, idx }));
};
