import React from 'react';
import Tab from '@/components/Tab';
import List from '@/components/List';
import { Meta } from '@storybook/react';
import mdx from './Tab.stories.mdx';
import classNames from 'classnames';
import styles from './Tab.stories.css';

export default {
  title: 'Components/Content/Tab',
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

const LIST3 = [
  {
    label: 'Item 1 Tab 3',
    value: 'vlabel'
  },
  {
    label: 'Item 2 Tab 3',
    value: 'vlabel1'
  }
];

const Template = args => {
  return <Tab {...args} variablesClassName={classNames(styles['menu-button-active'])} />;
};

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { title: 'Tab 1', active: true, key: '1' },
    { title: 'Tab 2', key: '2' }
  ],
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

const renderTitle = text => {
  return (
    <div>
      Tab
      <span>{text}</span>
    </div>
  );
};

export const TabWithHTMLElementTitle = Template.bind({});
TabWithHTMLElementTitle.args = {
  menuItems: [
    { title: renderTitle('1'), active: true, key: '1' },
    { title: renderTitle('2'), key: '2' },
    { title: 'Tab 3', key: '3' }
  ],
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
    </>,
    <>
      <div className={classNames(styles['component-container'])}>
        <h2 className={classNames(styles['component-title'])}>Tab 3 Sample Content</h2>
        <List
          options={LIST3}
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
