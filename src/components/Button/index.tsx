import React from 'react';

import PrimaryButton from '@/components/Button/PrimaryButton';
import SecondaryButton from '@/components/Button/SecondaryButton';

type Category = 'primary' | 'secondary';

interface Props {
  disabled?: boolean;
  label?: string;
  category?: Category,
  onClick: () => void;
}

const buttons = {
  'primary': PrimaryButton,
  'secondary': SecondaryButton,
};

const Button: React.FC<Props> = props => {
  const ButtonType = buttons[props.category || 'primary'];

  return (
    <ButtonType {...props} />
  );
};

export default Button;
