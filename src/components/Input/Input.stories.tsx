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
  size: 'large',
  placeholder: 'Enter text'
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  size: 'large',
  placeholder: 'Enter text',
  label: 'Input Label',
  id: 'input-id'
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  size: 'large',
  label: 'Email',
  validationRegex: '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)',
  placeholder: 'Enter Email',
  invalidMessage: 'Invalid email'
};

export const WithPrepend = Template.bind({});
WithPrepend.args = {
  size: 'large',
  placeholder: 'Enter Text',
  prepend: <div>$</div>,
  label: 'Email',
  validationRegex: '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)',
  invalidMessage: 'Invalid email'
};

export const WithPrependSeparator = Template.bind({});
WithPrependSeparator.args = {
  size: 'large',
  placeholder: 'Enter Text',
  prepend: <div>$</div>,
  withPrependSeparator: true,
  label: 'Email',
  validationRegex: '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)',
  invalidMessage: 'Invalid email'
};
