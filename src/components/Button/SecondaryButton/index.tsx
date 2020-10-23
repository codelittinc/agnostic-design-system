import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';

import '@/components/Button/SecondaryButton/SecondaryButton.css';

interface Props {
  disabled?: boolean;
  label?: string;
  onClick: () => void;
}

const SecondaryButton: React.FC<Props> = props => {
  return (
    <DefaultButton
      {...props}
      className="button button--secondary button--large"
    />
  );
};

export default SecondaryButton;
