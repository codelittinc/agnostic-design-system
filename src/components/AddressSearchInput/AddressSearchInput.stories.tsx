import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import AddressSearchInput from '@/components/AddressSearchInput';
import MapsProvider from '@/components/MapsProvider';

export default {
  title: 'Address Search Input',
  component: AddressSearchInput
} as Meta;

const Template = args => {
  const [value, setValue] = useState('');

  return (
    <MapsProvider apiKey={process.env.STORYBOOK_GOOGLE_API_KEY}>
      <AddressSearchInput
        {...args}
        value={value}
        onChange={value => {
          setValue(value ? value.description : '');
        }}
        placeholder='Enter Address'
        inputId='search-address'
        dropdownId='search-suggestion-list'
      />
    </MapsProvider>
  );
};

export const Default = Template.bind({});
