import React from 'react';
import Tab from '@/components/Tab';
import List from '@/components/List';
import { Meta } from '@storybook/react';
import mdx from './Tab.stories.mdx';
import classNames from 'classnames';
import styles from './Tab.stories.css';

export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const LIST1 = [
  {
    label: 'Item 1 Tab 1',
    value: 'vlabel'
  },
  {
    label: 'Item 2 Tab 1',
    value: 'vlabel1'
  }
];

const LIST2 = [
  {
    label: 'Item 1 Tab 2',
    value: 'vlabel'
  },
  {
    label: 'Item 2 Tab 2',
    value: 'vlabel1'
  }
];

const Template = args => {
  return <Tab {...args} variablesClassName={classNames(styles['menu-button-active'])} />;
};

export const Default = Template.bind({});
Default.args = {
  menuItems: [{ title: 'Tab 1', active: true }, { title: 'Tab 2' }],
  components: [
    <>
      <div className={classNames(styles['component-container'])}>
        <h2 className={classNames(styles['component-title'])}>Tab 1 Sample Content</h2>
        <List
          options={LIST1}
          id='list'
          getItemValue={item => item.value}
          getItemLabel={item => item.label}
          getItemKey={item => item.value}
          onChange={() => {}}
        />
      </div>
    </>,
    <>
      <div className={classNames(styles['component-container'])}>
        <h2 className={classNames(styles['component-title'])}>Tab 2 Sample Content</h2>
        <List
          options={LIST2}
          id='list'
          getItemValue={item => item.value}
          getItemLabel={item => item.label}
          getItemKey={item => item.value}
          onChange={() => {}}
        />
      </div>
    </>
  ]
};
