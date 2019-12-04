import * as React from 'react';

import TextInput from './TextInput';
import DateInput from './DateInput';
import TextareaInput from './TextareaInput';
import PasswordInput from './PasswordInput';

import style from './Input.module.scss';

type Status = 'success' | 'error' | undefined;
export type Type = 'text' | 'textarea' | 'date' | 'password';

interface PropTypes {
  iconPosition?: 'left' | 'right';
  id?: string;
  label?: string;
  name?: string;
  onChange: (value: string) => void;
  placeholder?: string;

  /** 'success' | 'error' */
  status?: Status;
  statusText?: string;

  /** 'text' | 'textarea' | 'date' | 'password' */
  type?: Type;

  value?: string;
  wrapperClassName?: string;
}

const getStatusMessageClassname = (status: Status) =>
  status ? style[`status-message-${status}`] : '';

const Input: React.FC<PropTypes> = (props: PropTypes) => {
  const { wrapperClassName, type, id, label, status, statusText } = props;
  const components = {
    text: TextInput,
    textarea: TextareaInput,
    date: DateInput,
    password: PasswordInput,
  };

  const Component = components[type!];

  return (
    <div className={`${style.wrapper} ${wrapperClassName}`}>
      {label && (
        <div className={style.label}>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className={style['input-container']}>
        <Component {...props} statusClassname={style[`${status}-status`]} />
      </div>
      {status && statusText && (
        <span
          className={`${style['status-message']} ${getStatusMessageClassname(
            status,
          )}
            `}
        >
          {statusText}
        </span>
      )}
    </div>
  );
};

Input.defaultProps = {
  iconPosition: 'right',
  type: 'text',
  wrapperClassName: '',
};

export default Input;
