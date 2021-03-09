import React from 'react';

import GhostButton from '@/components/Button/GhostButton';
import NegativeButton from '@/components/Button/NegativeButton';
import NeutralButton from '@/components/Button/NeutralButton';
import PositiveButton from '@/components/Button/PositiveButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import SecondaryButton from '@/components/Button/SecondaryButton';

type Category = 'ghost' | 'negative' | 'neutral' | 'positive' | 'primary' | 'secondary';
type Size = 'large' | 'medium';

interface Props {
  disabled?: boolean;
  label?: string;
  category?: Category;
  fixed?: boolean;
  onClick: () => void;
  size?: Size;
  variablesClassName?: string;
  appendIcon?: React.ReactNode;
  withAppendIcon?: boolean;
}

const buttons = {
  ghost: GhostButton,
  negative: NegativeButton,
  neutral: NeutralButton,
  positive: PositiveButton,
  primary: PrimaryButton,
  secondary: SecondaryButton
};

const Button: React.FC<Props> = props => {
  const ButtonType = buttons[props.category || 'neutral'];

  return <ButtonType {...props} />;
};

export default Button;
