import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Dropdown from '@/components/Dropdown';
import GearIcon from '@/assets/images/icons/web/gear.svg';
import styles from './Dropdown.stories.css';
import mdx from './Dropdown.stories.mdx';
import { uniqueId } from 'lodash';

export default {
  title: 'Components/Forms/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      page: mdx
    },
    controls: {
      sort: 'alpha'
    }
  },
  argTypes: {
    category: {
      description: 'A Dropdown can have one of two categories (Simple or Icon)'
    },
    disabled: {
      description: 'Specifies whether or the component should be disabled'
    },
    editable: {
      description: 'Allows the possibility of creating a dropdown input instead of dropdown button'
    },
    filterOptions: {
      description:
        'Accepts a function that takes the items from the options property as a parameter, and delimits the available items from the dropdown'
    },
    getListTitle: {
      description: 'Allows the opportunity to choose a text that will be shown in the Dropdown'
    },
    getItemLabel: {
      description: 'Displays the text for each option in the Dropdown'
    },
    getItemKey: {
      description: 'Unique key to be passed to each option in the Dropdown'
    },
    getItemValue: {
      description: 'Unique value to be passed to each option in the Dropdown'
    },
    groupBy: {
      description:
        'It is the function or string that is invoked for every element in the array options'
    },
    id: {
      description: 'Unique id'
    },
    label: {
      description: 'Displays the text of the option inside the Dropdown'
    },
    listItemCategory: {
      description: "The Dropdown's options can have one of two categories (Simple or Checkbox)"
    },
    multiselect: {
      description: 'Specifies whether or not multiple options in a Dropdown are able to be selected'
    },
    onChange: {
      description: "Calls a function whenever a change in an event of a dropdown's item is detected"
    },
    options: {
      description: 'Options array'
    },
    value: {
      description: 'Item selected initially'
    },
    selectorText: {
      description: 'Initial text displayed to the Dropdown'
    },
    showSelectAll: {
      description: 'Allows you to display an option to Select/Deselect all options'
    },
    size: {
      description: 'Size of the component'
    },
    sort: {
      description: 'Sorts the elements of the options array'
    },
    variablesClassName: {
      description: 'Accepts custom CSS class names'
    },
    required: {
      table: {
        disable: true
      }
    },
    onInputChange: {
      table: {
        disable: true
      }
    },
    onValidationChange: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template = args => {
  const [selectedItem, setSelectedItem] = useState(args.selected);

  return <Dropdown {...args} value={selectedItem} onChange={setSelectedItem} />;
};

const groupByList = [
  {
    label: 'B Option 1',
    value: '1'
  },
  {
    label: 'A Option 2',
    value: '2'
  },
  {
    label: 'B Option 3',
    value: '3'
  },
  {
    label: 'A  Option 4',
    value: '4'
  },
  {
    label: 'C Option 5',
    value: '5'
  }
];

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  category: 'simple',
  id: 'ads-dropdown',
  size: 'large',
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
  value: {
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
  editable: true,
  variablesClassName: styles.dropdown
};

export const EditableDropdownWithRequired = Template.bind({});
EditableDropdownWithRequired.args = {
  category: 'simple',
  id: 'ads-dropdown',
  size: 'large',
  label: 'Unselect the Option 2 to get the required field validation',
  selectorText: 'Selector Text',
  value: {
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
  required: true,
  editable: true,
  variablesClassName: styles.dropdown
};

export const IconDropdown = Template.bind({});
IconDropdown.args = {
  id: 'ads-dropdown',
  category: 'icon',
  size: 'large',
  listItemCategory: 'simple',
  label: "Editable Icon Dropdown with 'Option 2' initially selected",
  value: {
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
  editable: true,
  variablesClassName: styles.dropdown
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

export const CheckBoxDropdownWithDisabledOptions = Template.bind({});
CheckBoxDropdownWithDisabledOptions.args = {
  id: 'ads-dropdown',
  disabledOptionsList: ['2', '3'],
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
    },
    {
      label: 'Option 4',
      value: '4'
    }
  ],
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value,
  getListTitle: () => 'Dropdown',
  multiselect: true,
  variablesClassName: styles['dropdown-disabled-options']
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
  filterOptions: options => options.filter(option => option.label.includes('Foo')),
  variablesClassName: styles.dropdown
};

const sortArrayByLabel = (a, b) => {
  const nameA = a.label.toUpperCase(); // ignore upper and lowercase
  const nameB = b.label.toUpperCase(); // ignore upper and lowercase
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

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  category: 'simple',
  customIcon: <GearIcon width={15} height={15} />,
  iconPosition: 'left',
  id: 'ads-dropdown',
  size: 'large',
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

export const WithCustomNodes = Template.bind({});
const nodeLabelStyle = { fontFamily: 'Inter' };
WithCustomNodes.args = {
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
  showSelectAll: true,
  nodeAfterItems: <label style={nodeLabelStyle}>Bottom Label Inside of List Container</label>,
  nodeBeforeItems: <label style={nodeLabelStyle}>Top Label Inside of List Container</label>
};

export const WithGroupBy = Template.bind({});
WithGroupBy.args = {
  id: 'ads-dropdown',
  category: 'simple',
  size: 'large',
  listItemCategory: 'checkbox',
  label: 'Dropdown',
  selectorText: 'Selector Text',
  options: groupByList,
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value,
  getListTitle: list => list.map(x => x.label).join(', '),
  multiselect: true,
  groupBy: item => item.label[0]
};

export const WithCollapsibleGroups = Template.bind({});
WithCollapsibleGroups.args = {
  collapsibleGroups: true,
  id: 'ads-dropdown',
  category: 'simple',
  size: 'large',
  listItemCategory: 'checkbox',
  label: 'Dropdown',
  selectorText: 'Selector Text',
  options: groupByList,
  getItemLabel: item => item.label,
  getItemKey: item => item.value,
  getItemValue: item => item.value,
  getListTitle: () => 'Selector Text',
  multiselect: true,
  groupBy: item => item.label[0],
  hideGroupByTitle: true,
  variablesClassName: styles['custom-styled-collapsible-dropdown'],
  collapsibleGroupsButtonItems: [
    <div className={styles['collapsible-button-icon-wrapper']} key={uniqueId()}>
      <GearIcon />
    </div>,
    <div className={styles['collapsible-button-icon-wrapper']} key={uniqueId()}>
      <GearIcon />
    </div>
  ]
};

export const WithRequired = Template.bind({});
WithRequired.args = {
  category: 'simple',
  id: 'ads-dropdown',
  size: 'large',
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
  required: true
};

export const DisplayListOnTop = Template.bind({});
DisplayListOnTop.args = {
  category: 'simple',
  id: 'ads-dropdown',
  size: 'large',
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
  listPosition: 'top'
};

export const CustomStyledDropdown = () => {
  const [selectedOption, setSelectedOption] = useState({});

  return (
    <Dropdown
      getItemLabel={item => item.label}
      getItemKey={item => item.value}
      getItemValue={item => item.value}
      getListTitle={item => item.label}
      options={[
        {
          label: 'Option 1',
          value: '1'
        },
        {
          label: 'Option 2',
          value: '2'
        },
        {
          label: 'Option 212323213232131',
          value: '22'
        }
      ]}
      onChange={setSelectedOption}
      value={selectedOption}
      selectorText='Select'
      variablesClassName={styles['custom-styled-dropdown']}
    />
  );
};
