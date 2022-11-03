import React, { useState } from 'react';
import { ControlledInputProps } from '../Input';

export interface Field {
  name: string;
  value?: any;
  isValid?: boolean;
}

type Props = {
  initialValues?: object;
  onSubmit: (values) => void;
  render: (inputProps: {
    isValid: boolean;
    state: { [name: string]: Field };
    getInputControls: <T = string>(name: string) => ControlledInputProps<T>;
  }) => React.ReactNode;
};

const ControlledForm = (props: Props) => {
  const [fields, setFields] = useState<{ [key: string]: Field }>({});

  const isValid = Object.values(fields).every(
    field => field.isValid === undefined || field.isValid
  );

  const onSubmitHandler = formEvent => {
    formEvent.preventDefault();

    const values = Object.keys(fields).reduce((previous, current) => {
      return { ...previous, [current]: fields[current].value };
    }, {});

    if (isValid) {
      props.onSubmit(values);
    }
  };

  const onInputValueChange = <T,>(field: string, value?: T) => {
    setFields(f => (f[field] ? { ...f, [field]: { ...f[field], value } } : f));
  };

  const onValidationChange = (field: string, isValid: boolean) => {
    setFields(f => (f[field] ? { ...f, [field]: { ...f[field], isValid } } : f));
  };

  const getFieldValue = <T,>(field: string): T | undefined => {
    return fields[field]?.value;
  };

  const inputRegister = (field: string) => {
    if (!fields[field]) {
      const defaultValue = props.initialValues?.[field];
      setFields(f => (f[field] ? f : { ...f, [field]: { name: field, value: defaultValue } }));
    }
  };

  const getInputControls = <T,>(field: string): ControlledInputProps<T> => {
    inputRegister(field);
    return {
      onChange: value => onInputValueChange<T>(field, value),
      onValidationChange: value => onValidationChange(field, value),
      value: getFieldValue<T>(field)
    };
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {props.render({
        isValid,
        getInputControls,
        state: fields
      })}
    </form>
  );
};

ControlledForm.defaultProps = {
  initialValues: {}
};

ControlledForm.displayName = 'ControlledForm';

export default ControlledForm;
