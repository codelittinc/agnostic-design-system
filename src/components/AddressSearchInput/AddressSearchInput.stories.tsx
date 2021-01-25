import React from 'react';
import { Meta } from '@storybook/react';
import AddressSearchInput from '@/components/AddressSearchInput';

export default {
  title: 'Address Search Input',
  component: AddressSearchInput
} as Meta;

const Template = args => {
  return <AddressSearchInput {...args} apiKey={process.env.GOOGLE_API_KEY} />;
};

export const Default = Template.bind({});
