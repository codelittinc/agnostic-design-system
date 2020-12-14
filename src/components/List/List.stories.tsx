import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import List from '@/components/List';
import isEqual from 'lodash.isequal';

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

export const RadioButtonList = Template.bind({});
RadioButtonList.args = {
  listItemCategory: 'radio',
  label: 'Some label',
  id: 'ads-list',
  size: 'large',
  options: [
    {
      label: 'Item 1',
      value: '1',
      name: 'test'
    },
    {
      label: 'Item 2',
      value: '2',
      name: 'test'
    }
  ],
  getItemValue: item => item.value,
  getItemLabel: item => item.label,
  getItemName: item => item.name,
  getItemKey: item => item.value
};

const CheckTemplate = args => {
  const [selectedItem, setSelectedItem] = useState(args.selected);

  const checkClick = item => {
    isEqual(item, selectedItem)
      ? setSelectedItem(null)
      : setSelectedItem(
          args.options.find(option => args.getItemValue(option) === args.getItemValue(item)) || null
        );
  };

  return <List {...args} selected={selectedItem} onChange={checkClick} />;
};

export const CheckBoxList = CheckTemplate.bind({});
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

export const CheckMarkList = CheckTemplate.bind({});
CheckMarkList.args = {
  listItemCategory: 'checkmark',
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
