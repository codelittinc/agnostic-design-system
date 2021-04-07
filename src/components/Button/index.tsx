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
  id?: string;
  text?: string;
  onClick?: () => void;
  size?: Size;
  type?: 'button' | 'submit' | 'reset' | undefined;
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

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const ButtonType = buttons[props.category || 'neutral'];

  return <ButtonType {...props} ref={ref} />;
});

export default Button;
