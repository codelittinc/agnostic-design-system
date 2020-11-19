import React from 'react';
import { Meta } from '@storybook/react';
import SearchInput from '@/components/SearchInput';

export default {
  title: 'Search Input',
  component: SearchInput
} as Meta;

const Template = args => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  placeholder: 'Search Anything'
};

export const DefaultWithValue = Template.bind({});
DefaultWithValue.args = {
  description: 'Some Description',
  size: 'large',
  value: 'Hello',
  message: 'Some message',
  label: 'Input Label'
};

export const Positive = Template.bind({});
Positive.args = {
  size: 'large',
  state: 'valid',
  placeholder: 'Search Anything'
};

export const Negative = Template.bind({});
Negative.args = {
  size: 'large',
  state: 'invalid',
  placeholder: 'Search Anything'
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  size: 'large',
  placeholder: 'Search Anything',
  label: 'Input Label'
};

export const PositiveWithLabel = Template.bind({});
PositiveWithLabel.args = {
  size: 'large',
  state: 'valid',
  placeholder: 'Search Anything',
  label: 'Input Label'
};

export const NegativeWithLabel = Template.bind({});
NegativeWithLabel.args = {
  size: 'large',
  state: 'invalid',
  placeholder: 'Search Anything',
  label: 'Input Label'
};

export const Complete = Template.bind({});
Complete.args = {
  description: 'Some Description',
  size: 'large',
  state: '',
  message: 'Some message',
  placeholder: 'Search Anything',
  label: 'Input Label'
};
