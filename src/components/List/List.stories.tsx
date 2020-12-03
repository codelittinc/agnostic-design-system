import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import List from '@/components/List';

export default {
  title: 'List',
  component: List
} as Meta;

const Template = args => {
  const [selectedItem, setSelectedItem] = useState(args.selected);

  return <List {...args} selected={selectedItem} onChange={setSelectedItem} />;
};

export const SimpleList = Template.bind({});
SimpleList.args = {
  listItemCategory: 'simple',
  id: 'ads-list',
  size: 'large',
  options: [
    {
      label: 'Item 1',
      value: '1'
    },
    {
      label: 'Item 2',
      value: '2'
    }
  ],
  getItemValue: item => item.value,
  getItemLabel: item => item.label,
  getItemKey: item => item.value
};

export const IconList = Template.bind({});
IconList.args = {
  listItemCategory: 'icon',
  id: 'ads-list',
  size: 'large',
  options: [
    {
      label: 'Item 1',
      value: '1'
    },
    {
      label: 'Item 2',
      value: '2'
    }
  ],
  getItemValue: item => item.value,
  getItemLabel: item => item.label,
  getItemKey: item => item.value
};

export const CheckBoxList = Template.bind({});
CheckBoxList.args = {
  listItemCategory: 'checkbox',
  label: 'Some label',
  id: 'ads-list',
  size: 'large',
  options: [
    {
      label: 'Item 1',
      value: '1'
    },
    {
      label: 'Item 2',
      value: '2'
    }
  ],
  getItemValue: item => item.value,
  getItemLabel: item => item.label,
  getItemKey: item => item.value
};
