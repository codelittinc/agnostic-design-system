import { useState, useEffect } from 'react';
import getCustomChildren from './getCustomChildren';
import getRerenderKeys from './getRerenderKeys';

interface Props {
  children: React.ReactElement[];
  initialValues?: object;
  onSubmit: (values) => void;
  validate?: boolean;
}

const Form = (props: Props) => {
  const { children, onSubmit, initialValues } = props;

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
    setCustomChildren(getCustomChildren(customChildremProps));
  }, getRerenderKeys(children, values, fieldsValidationState));

  return customChildren;
};

Form.defaultProps = {
  initialValues: {},
  validate: false
};

Form.displayName = 'Form';

export default Form;
