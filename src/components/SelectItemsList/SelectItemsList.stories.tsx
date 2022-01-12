import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import SelectItemsList from '@/components/SelectItemsList';
import mdx from './SelectItemsList.stories.mdx';
import TestSearchIcon from '@/assets/images/icons/web/search-simple.svg';

export default {
  title: 'Components/Select Items List',
  component: SelectItemsList,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [selectedItem, setSelectedItem] = useState(args.selected);

  return <SelectItemsList {...args} selected={selectedItem} onChange={setSelectedItem} />;
};

const options = [
  { name: 'Software', id: 'Software' },
  { name: 'Financing', id: 'Financing' },
  { name: 'Retail', id: 'Retail' },
  { name: 'Pet', id: 'Pet' },
  { name: 'Law', id: 'Law' }
];

export const Default = Template.bind({});
Default.args = {
  label: 'Select Items List',
  options,
  getItemKey: item => item.id,
  getItemValue: item => item.id
};

export const WithCustomItem = Template.bind({});
WithCustomItem.args = {
  options,
  getItemKey: item => item.id,
  getItemValue: item => item.id,
  getItem: item => {
    return (
      <div>
        <p>
          <TestSearchIcon />
        </p>
        <span>{item.name}</span>
      </div>
    );
  }
};
