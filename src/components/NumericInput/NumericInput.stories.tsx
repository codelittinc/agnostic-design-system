import React from 'react';
import { Meta } from '@storybook/react';
import NumericInput from '@/components/NumericInput';

export default {
  title: 'Numeric Input',
  component: NumericInput
} as Meta;

const Template = args => {
  return <NumericInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  placeholder: 'Enter text',
  label: 'Numeric Input'
};

export const CustomNumeric = Template.bind({});
CustomNumeric.args = {
  size: 'large',
  placeholder: 'Enter text',
  label: 'Custom Numeric Input',
  max: 10000,
  radix: ',',
  scale: 2
};
