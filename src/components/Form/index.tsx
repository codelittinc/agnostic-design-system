import { useState, useEffect } from 'react';
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

  const [customChildren, setCustomChildren] = useState([]);
  const [fieldsValidationState, setFieldsValidationState] = useState({});

  const customChildremProps = {
    children,
    values,
    setValues,
    onSubmit,
    fieldsValidationState,
    setFieldsValidationState
  };

  useEffect(() => {
    const v = getInitialValidationState(editables, values);
    setFieldsValidationState(v);
  }, []);

  useEffect(() => {
    setCustomChildren(getCustomChildren(customChildremProps));
  }, getRerenderKeys(values, fieldsValidationState, names));

  return customChildren;
};

Form.defaultProps = {
  initialValues: {},
  validate: false
};

Form.displayName = 'Form';

export default Form;
