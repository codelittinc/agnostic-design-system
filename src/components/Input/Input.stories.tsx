import React from 'react';
import { Meta } from '@storybook/react';
import Input from '@/components/Input';

export default {
  title: 'Input',
  component: Input
} as Meta;

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large'
};

export const PositiveInput = Template.bind({});
PositiveInput.args = {
  size: 'large',
  state: 'valid'
};

export const NegativeInput = Template.bind({});
NegativeInput.args = {
  size: 'large',
  state: 'invalid'
};
