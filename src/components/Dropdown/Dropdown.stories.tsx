import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Dropdown from '@/components/Dropdown';
import mdx from './Dropdown.stories.mdx';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [selectedItem, setSelectedItem] = useState(args.selected);

  return <Dropdown {...args} selected={selectedItem} onChange={setSelectedItem} />;
};

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  category: 'simple',
  id: 'ads-dropdown',
  size: 'large',
  label: 'Dropdown',
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
  getListTitle: item => item.label
};

export const EditableDropdown = Template.bind({});
EditableDropdown.args = {
  category: 'simple',
  id: 'ads-dropdown',
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
  getItemValue: item => item.value,
  getListTitle: item => item.label,
  editable: true
};

export const IconDropdown = Template.bind({});
IconDropdown.args = {
  id: 'ads-dropdown',
  category: 'icon',
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
  getItemValue: item => item.value,
  getListTitle: item => item.label,
  editable: true
};

export const CheckBoxDropdown = Template.bind({});
CheckBoxDropdown.args = {
  id: 'ads-dropdown',
  category: 'simple',
  size: 'large',
  listItemCategory: 'checkbox',
  label: 'Dropdown',
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
  getListTitle: () => 'Dropdown',
  multiselect: true
};
