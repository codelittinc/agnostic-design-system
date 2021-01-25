import React from 'react';
import { Meta } from '@storybook/react';
import AddressSearchInput from '@/components/AddressSearchInput';

export default {
  title: 'Address Search Input',
  component: AddressSearchInput
} as Meta;

const Template = args => <AddressSearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  placeholder: 'Address Search',
  apiKey: process.env.GOOGLE_API_KEY
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  size: 'large',
  placeholder: 'Search some address',
  apiKey: process.env.GOOGLE_API_KEY,
  label: 'Address Search label',
  description: 'Description'
};

export const DefaultListPlaceholder = Template.bind({});
DefaultListPlaceholder.args = {
  size: 'large',
  placeholder: 'Search some address',
  apiKey: process.env.GOOGLE_API_KEY,
  noOptionsMessage: () => 'No address'
};
