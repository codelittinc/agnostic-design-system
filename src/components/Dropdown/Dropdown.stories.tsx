import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Dropdown from '@/components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown
} as Meta;

const Template = args => {
  const [selectedItem, setSelectedItem] = useState(null);

  return <Dropdown {...args} selected={selectedItem} onChange={setSelectedItem} />;
};

export const Default = Template.bind({});
Default.args = {
  category: 'simple',
  id: 'ads-dropdown',
  size: 'large',
  options: []
};

export const SimpleDropdown = Template.bind({});
SimpleDropdown.args = {
  category: 'simple',
  labelKey: 'label',
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
  ]
};

export const IconDropdown = Template.bind({});
IconDropdown.args = {
  category: 'icon',
  labelKey: 'label',
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
  ]
};

export const LabelDropdown = Template.bind({});
LabelDropdown.args = {
  category: 'simple',
  label: 'Some Label',
  labelKey: 'label',
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
  ]
};
