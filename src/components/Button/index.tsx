import React from 'react';

import PositiveButton from '@/components/Button/PositiveButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import SecondaryButton from '@/components/Button/SecondaryButton';

type Category = 'primary' | 'secondary' | 'positive';

interface Props {
  disabled?: boolean;
  label?: string;
  category?: Category,
  fixed?: boolean,
  onClick: () => void;
}

const buttons = {
  'positive': PositiveButton,
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
