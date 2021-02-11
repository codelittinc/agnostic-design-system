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
  getItemLabel: item => item.label
};

export const IconDropdown = Template.bind({});
IconDropdown.args = {
  id: 'ads-dropdown',
  category: 'icon',
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
  getItemLabel: item => item.label
};

export const LabelDropdown = Template.bind({});
LabelDropdown.args = {
  id: 'ads-dropdown',
  category: 'simple',
  label: 'Some Label',
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
  getItemLabel: item => item.label
};

export const CustomIconDropdown = Template.bind({});
CustomIconDropdown.args = {
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
  getDropdownIcon: () => (
    <img
      height='20px'
      width='20px'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/1024px-Speaker_Icon.svg.png'
    />
  )
};

export const CheckBoxDropdown = Template.bind({});
CheckBoxDropdown.args = {
  id: 'ads-dropdown',
  category: 'icon',
  label: 'Some Label',
  valueKey: 'value',
  size: 'large',
  listItemCategory: 'checkbox',
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
  getItemLabel: item => item.label
};

export const SimpleListItemDropdown = Template.bind({});
SimpleListItemDropdown.args = {
  id: 'ads-dropdown',
  category: 'simple',
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
  getItemLabel: item => item.label
};

export const IconListItemDropdown = Template.bind({});
IconListItemDropdown.args = {
  id: 'ads-dropdown',
  category: 'icon',
  label: 'Some Label',
  valueKey: 'value',
  size: 'large',
  listItemCategory: 'icon',
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
  getItemLabel: item => item.label
};

export const CustomIconListItemDropdown = Template.bind({});
CustomIconListItemDropdown.args = {
  id: 'ads-dropdown',
  category: 'icon',
  label: 'Some Label',
  valueKey: 'value',
  size: 'large',
  listItemCategory: 'icon',
  selected: {
    label: 'Option 2',
    value: '2',
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/1024px-Speaker_Icon.svg.png'
  },
  options: [
    {
      label: 'Option 1',
      value: '1',
      src:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/1024px-Speaker_Icon.svg.png'
    },
    {
      label: 'Option 2',
      value: '2',
      src: 'https://www.flaticon.com/svg/static/icons/svg/25/25694.svg'
    }
  ],
  getItemLabel: item => item.label,
  getDropdownIcon: item => <img height='20px' width='20px' src={item.src} />,
  getItemIcon: item => <img height='20px' width='20px' src={item.src} />
};
