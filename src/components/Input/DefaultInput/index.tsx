import React from 'react';
import classNames from 'classnames';

import styles from '@/components/Input/DefaultInput/DefaultInput.css';

interface Props {
  className: string;
  disabled?: boolean;
  onChange: () => void;
  placeholder?: string;
  size?: string;
  value?: string;
}

const DefaultInput: React.FC<Props> = props => {
  const { onChange, placeholder, value, size, ...inputProps } = props;
  const sizeClass = `input--${size}`;

  return (
    <input
      {...inputProps}
      className={classNames(props.className, styles.input, styles[sizeClass])}
      onChange={onChange}
      placeholder={placeholder}
      type='text'
      value={value}
    />
  );
};

DefaultInput.defaultProps = {
  disabled: false,
  placeholder: '',
  size: 'large',
  value: ''
};

export default DefaultInput;
