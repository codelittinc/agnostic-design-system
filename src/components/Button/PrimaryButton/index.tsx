import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';

import '@/components/Button/PrimaryButton/PrimaryButton.css';

interface Props {
  disabled?: boolean;
  fixed?: boolean,
  label?: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className="button button--primary button--large"
    />
  );
};

export default PrimaryButton;
