import React from 'react';
import classNames from 'classnames';

import styles from '@/components/Button/DefaultButton/DefaultButton.css'

interface Props {
  className: string,
  disabled?: boolean;
  fixed?: boolean,
  label?: string;
  onClick: () => void;
}

const DefaultButton: React.FC<Props> = props => {
  const {
    className,
    fixed,
    label,
    onClick,
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      onClick={onClick}
      type='button'
      className={classNames(props.className, {
        [styles['button--fixed']]: fixed,
      })}
    >
      {label}
    </button>
  );
};

export default DefaultButton;
