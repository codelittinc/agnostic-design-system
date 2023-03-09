import { useState, useEffect, useMemo } from 'react';
import getCustomChildren from './getCustomChildren';
import getRerenderKeys from './getRerenderKeys';
import getInitialValidationState from './getInitialValidationState';
import getEditableComponents from './getEditableComponents';

interface Props {
  children: React.ReactElement[] | React.ReactElement;
  initialValues?: object;
  onSubmit: (values) => void;
  validate?: boolean;
}

const Form = (props: Props) => {
  const { children, onSubmit, initialValues } = props;
  const editables = getEditableComponents(children);
  const names = editables.map(e => e.props.name);

  const [values, setValues] = useState(initialValues);

  const [customChildren, setCustomChildren] = useState<any[]>([]);
  const [fieldsValidationState, setFieldsValidationState] = useState({});

  const customChildrenProps = useMemo(() => {
    return {
      children,
      values,
      setValues,
      onSubmit,
      fieldsValidationState,
      setFieldsValidationState
    };
  }, [children, onSubmit, values, fieldsValidationState, setValues, setFieldsValidationState]);

  useEffect(() => {
    const v = getInitialValidationState(editables, values);
    setFieldsValidationState(v);
  }, [editables, values]);

  const rerenderKeys = getRerenderKeys(values, fieldsValidationState, names, children);

  useEffect(() => {
    setCustomChildren(getCustomChildren(customChildrenProps));
  }, [customChildrenProps, rerenderKeys]);

  return customChildren;
};

Form.defaultProps = {
  initialValues: {},
  validate: false
};

Form.displayName = 'Form';

export default Form;
