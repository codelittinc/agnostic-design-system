import React from 'react';
import classNames from 'classnames';
import styles from '@/components/Button/DefaultButton/DefaultButton.css';

interface Props {
  className: string;
  disabled?: boolean;
  fixed?: boolean;
  label?: string;
  onClick: () => void;
  size?: string;
  variablesClassName?: string;
}

const DefaultButton: React.FC<Props> = props => {
  const { className, fixed, label, onClick, size, variablesClassName, ...buttonProps } = props;

  const sizeClass = `button--${size}`;

  return (
    <button
      {...buttonProps}
      onClick={onClick}
      type='button'
      className={classNames(
        className,
        styles.button,
        styles[sizeClass],
        {
          [styles['button--fixed']]: fixed
        },
        variablesClassName
      )}
    >
      {label}
    </button>
  );
};

DefaultButton.defaultProps = {
  disabled: false,
  fixed: false,
  size: 'large'
};

export default DefaultButton;
