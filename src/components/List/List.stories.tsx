import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import List from '@/components/List';
import mdx from './List.stories.mdx';
import styles from './List.stories.css';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [selectedItem, setSelectedItem] = useState({ label: '', value: '' });

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

export const CheckBoxList = Template.bind({});
CheckBoxList.args = {
  listItemCategory: 'checkbox',
  label: 'Some label',
  id: 'ads-list',
  size: 'large',
  multiselect: true,
  options: [
    {
      label: 'Item 1',
      value: '1'
    },
    {
      label: 'Item 2',
      value: '2'
    },
    {
      label: 'Item 3',
      value: '3'
    },
    {
      label: 'Item 4',
      value: '4'
    }
  ],
  getItemValue: item => item.value,
  getItemLabel: item => item.label,
  getItemKey: item => item.value
};

export const CheckMarkList = Template.bind({});
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

export const CustomStyledRadioList = () => {
  const [selectedItem, setSelectedItem] = useState({ label: '', value: '' });

  return (
    <List
      getItemValue={item => item.value}
      getItemLabel={item => item.label}
      getItemKey={item => item.value}
      listItemCategory='radio'
      onChange={setSelectedItem}
      options={[
        {
          label: 'Item 1',
          value: '1'
        },
        {
          label: 'Item 2',
          value: '2'
        }
      ]}
      selected={selectedItem}
      size='large'
      variablesClassName={styles['custom-list']}
    />
  );
};

export const CustomStyledSelectAllList = () => {
  const [selectedItem, setSelectedItem] = useState({ label: '', value: '' });

  return (
    <List
      getItemValue={item => item.value}
      getItemLabel={item => item.label}
      getItemKey={item => item.value}
      label='Some Label'
      listItemCategory='checkbox'
      onChange={setSelectedItem}
      multiselect
      options={[
        {
          label: 'Item 1',
          value: '1'
        },
        {
          label: 'Item 2',
          value: '2'
        },
        {
          label: 'Item 3',
          value: '3'
        }
      ]}
      selected={selectedItem}
      showSelectAll
      size='medium'
      variablesClassName={styles['custom-select-all-list']}
    />
  );
};
