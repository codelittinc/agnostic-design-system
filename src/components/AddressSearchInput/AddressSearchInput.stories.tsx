import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import AddressSearchInput, { MapsProvider } from '@/components/AddressSearchInput';

export default {
  title: 'Address Search Input',
  component: AddressSearchInput
} as Meta;

const Template = args => {
  const [value, setValue] = useState('');

  return (
    <MapsProvider apiKey={process.env.GOOGLE_API_KEY}>
      <AddressSearchInput
        {...args}
        value={value}
        onChange={value => {
          setValue(value ? value.description : '');
        }}
      />
    </MapsProvider>
  );
};

export const Default = Template.bind({});
