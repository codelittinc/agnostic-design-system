import React from 'react';

import SimpleInput from '@/components/Input/SimpleInput';

type Category = 'simple';
type Size = 'large' | 'medium';

interface Props {
  category?: Category;
  disabled?: boolean;
  onChange: () => void;
  placeholder?: string;
  size?: Size;
  value?: string;
}

const inputs = {
  simple: SimpleInput
};

const Input: React.FC<Props> = props => {
  const InputType = inputs[props.category || 'simple'];
  return <InputType {...props} />;
};

export default Input;
