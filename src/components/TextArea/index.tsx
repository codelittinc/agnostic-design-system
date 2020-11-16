import React from 'react';
import classNames from 'classnames';

import styles from '@/components/TextArea/TextArea.css';

type Size = 'large' | 'medium';
type State = '' | 'valid' | 'invalid';

interface Props {
  description?: string;
  disabled?: boolean;
  label?: string;
  message?: string;
  onChange: () => void;
  placeholder?: string;
  state?: State;
  size: Size;
  value?: string;
  variablesClassName?: string;
}

const TextArea: React.FC<Props> = props => {
  const {
    description,
    disabled,
    label,
    onChange,
    message,
    placeholder,
    size,
    state,
    value,
    variablesClassName,
    ...textareaProps
  } = props;
  const sizeClass = `textarea--${size}`;
  const messageClass = 'textarea--message';
  const messageValidateClass = state ? `textarea--message-${state}` : '';
  const statusClass = state ? `textarea--${state}` : '';
  const descriptionClass = 'textarea--description';
  const labelClass = 'textarea--label';

  return (
    <div className={classNames(variablesClassName)}>
      {label ? <label className={classNames(styles[labelClass])}>{label}</label> : ''}
      {description ? (
        <span className={classNames(styles[descriptionClass])}>{description}</span>
      ) : (
        ''
      )}
      <textarea
        {...textareaProps}
        className={classNames(styles.textarea, styles[sizeClass], styles[statusClass])}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {message ? (
        <span className={classNames(styles[messageClass], styles[messageValidateClass])}>
          {message}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

TextArea.defaultProps = {
  size: 'large'
};

export default TextArea;
