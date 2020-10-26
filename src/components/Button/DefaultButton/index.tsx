import React from 'react';

import '@/components/Button/DefaultButton/DefaultButton.css'

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

  const btnClassName = fixed ? `button--fixed ${props.className}` : props.className;

  return (
    <button
      {...buttonProps}
      onClick={onClick}
      type='button'
      className={btnClassName}
    >
      {label}
    </button>
  );
};

export default DefaultButton;
