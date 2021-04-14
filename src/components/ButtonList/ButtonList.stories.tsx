import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import ButtonList from '@/components/ButtonList';
import mdx from './ButtonList.stories.mdx';
import TestSearchIcon from '@/assets/images/icons/web/search-simple.svg';

export default {
  title: 'Components/ButtonList',
  component: ButtonList,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [selectedItem, setSelectedItem] = useState(args.selected);

  return <ButtonList {...args} selected={selectedItem} onChange={setSelectedItem} />;
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
  options,
  getItemKey: item => item.id
};

export const WithCustomItem = Template.bind({});
WithCustomItem.args = {
  options,
  getItemKey: item => item.id,
  getItem: item => {
    return (
      <div>
        <TestSearchIcon />
        <span style={{ marginLeft: '10px' }}>{item.name}</span>
      </div>
    );
  }
};

export const WithPrimaryCategory = Template.bind({});
WithPrimaryCategory.args = {
  options,
  category: 'primary',
  getItemKey: item => item.id
};
