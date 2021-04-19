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
  selectorText: 'Selector Text',
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

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  category: 'simple',
  id: 'ads-dropdown',
  size: 'large',
  label: 'Dropdown',
  selectorText: 'Selector Text',
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
  disabled: true
};

export const EditableDropdown = Template.bind({});
EditableDropdown.args = {
  category: 'simple',
  id: 'ads-dropdown',
  size: 'large',
  label: "Editable Dropdown with 'Option 2' initially selected",
  selectorText: 'Selector Text',
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
  label: "Editable Icon Dropdown with 'Option 2' initially selected",
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
  selectorText: 'Selector Text',
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

export const FilteredOptionsDropdown = Template.bind({});
FilteredOptionsDropdown.args = {
  id: 'ads-dropdown',
  category: 'simple',
  size: 'large',
  listItemCategory: 'simple',
  label: "Dropdown filtered to only render options containing the string 'Foo'",
  selectorText: 'Select an option',
  options: [
    {
      label: 'Foo',
      value: '1'
    },
    {
      label: 'Bar',
      value: '2'
    },
    {
      label: 'Foo Bar',
      value: '3'
    },
    {
      label: 'Foo Foo',
      value: '4'
    },
    {
      label: 'Bar Bar',
      value: '5'
    }
  ],
  editable: true,
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value,
  getListTitle: item => item.label,
  filterOptions: options => options.filter(option => option.label.includes('Foo'))
};

const sortArrayByLabel = (a, b) => {
  var nameA = a.label.toUpperCase(); // ignore upper and lowercase
  var nameB = b.label.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

export const SortedOptionsDropdown = Template.bind({});
SortedOptionsDropdown.args = {
  id: 'ads-dropdown',
  category: 'simple',
  size: 'large',
  listItemCategory: 'simple',
  selectorText: 'Alphabetically sorted options',
  options: [
    {
      label: 'F',
      value: '1'
    },
    {
      label: 'B',
      value: '2'
    },
    {
      label: 'A',
      value: '3'
    },
    {
      label: 'D',
      value: '4'
    },
    {
      label: 'X',
      value: '5'
    }
  ],
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value,
  getListTitle: item => item.label,
  sort: sortArrayByLabel
};

export const WithMultiselectAndShowSelectAll = Template.bind({});
WithMultiselectAndShowSelectAll.args = {
  id: 'ads-dropdown',
  category: 'simple',
  size: 'large',
  listItemCategory: 'checkbox',
  label: 'Dropdown',
  selectorText: 'Selector Text',
  options: [
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    }
  ],
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value,
  getListTitle: list => list.map(x => x.label).join(', '),
  multiselect: true,
  showSelectAll: true
};
