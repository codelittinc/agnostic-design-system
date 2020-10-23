import React from 'react';

interface Props {
  className: string,
  disabled?: boolean;
  label?: string;
  onClick: () => void;
}

const DefaultButton: React.FC<Props> = props => {
  return (
    <button
      {...props}
      onClick={props.onClick}
      type='button'
      className={props.className}
    >
      {props.label}
    </button>
  );
};

export default DefaultButton;
