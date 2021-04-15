import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import AddressSearch from '@/components/AddressSearch';
import MapsProvider from '@/components/MapsProvider';
import mdx from './AddressSearch.stories.mdx';

export default {
  title: 'Components/Address Search',
  component: AddressSearch,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [selected, setSelected] = useState<google.maps.places.AutocompletePrediction>();

  return (
    <MapsProvider apiKey={process.env.STORYBOOK_GOOGLE_API_KEY}>
      <AddressSearch
        {...args}
        selected={selected}
        onChange={value => {
          setSelected(value);
        }}
        placeholder='Enter Address'
        id='ads-address-search'
      />
    </MapsProvider>
  );
};

export const Default = Template.bind({});
