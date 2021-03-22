import React from 'react';

import GhostButton from '@/components/Button/GhostButton';
import NegativeButton from '@/components/Button/NegativeButton';
import NeutralButton from '@/components/Button/NeutralButton';
import PositiveButton from '@/components/Button/PositiveButton';
import PrimaryButton from '@/components/Button/PrimaryButton';
import SecondaryButton from '@/components/Button/SecondaryButton';

type Category = 'ghost' | 'negative' | 'neutral' | 'positive' | 'primary' | 'secondary';
type Size = 'large' | 'medium';

export const SUBMIT_TYPE = 'submit';

interface Props {
  appendIcon?: React.ReactNode;
  category?: Category;
  content?: React.ReactNode;
  disabled?: boolean;
  fixed?: boolean;
  label?: string;
  onClick: () => void;
  size?: Size;
  type?: string;
  variablesClassName?: string;
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
