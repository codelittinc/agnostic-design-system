import React from 'react';
import { Meta } from '@storybook/react';
import Input from '@/components/Input';

export default {
  title: 'Input',
  component: Input
} as Meta;

const Template = args => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  category: 'simple',
  size: 'large',
  placeholder: 'Enter text'
};
