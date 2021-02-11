import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import NumericInput from '@/components/NumericInput';

export default {
  title: 'Components/Numeric Input',
  component: NumericInput
} as Meta;

const Template = args => {
  const [value, setValue] = useState('');

  return <NumericInput {...args} value={value} onChange={e => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  placeholder: 'Enter number',
  label: 'Numeric Input'
};

export const CustomNumeric = Template.bind({});
CustomNumeric.args = {
  size: 'large',
  placeholder: 'Enter number',
  label: 'Custom Numeric Input',
  max: 10000,
  radix: ',',
  scale: 2
};
