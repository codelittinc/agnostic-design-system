import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Dropdown from '@/components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown
} as Meta;

const Template = args => {
  const [selectedItem, setSelectedItem] = useState(args.selected);

  return <Dropdown {...args} selected={selectedItem} onChange={setSelectedItem} />;
};

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  category: 'simple',
  id: 'ads-dropdown',
  valueKey: 'value',
  size: 'large',
  selected: {
    label: 'Option 2',
    value: '2'
  },
  options: [
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    }
  ],
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  category: 'simple',
  id: 'ads-dropdown',
  valueKey: 'value',
  size: 'large',
  selected: {},
  options: [
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    }
  ],
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value,
  multiselect: true
};

export const IconDropdown = Template.bind({});
IconDropdown.args = {
  id: 'ads-dropdown',
  category: 'icon',
  label: 'Some Label',
  valueKey: 'value',
  size: 'large',
  listItemCategory: 'simple',
  selected: {
    label: 'Option 2',
    value: '2'
  },
  options: [
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    }
  ],
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value
};

export const CheckBoxDropdown = Template.bind({});
CheckBoxDropdown.args = {
  id: 'ads-dropdown',
  category: 'simple',
  valueKey: 'value',
  size: 'large',
  listItemCategory: 'checkbox',
  selected: {},
  options: [
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    }
  ],
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value,
  multiselect: true
};
