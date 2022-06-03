import React from 'react';
import Table from '@/components/Table';
import { Meta } from '@storybook/react';
import mdx from './Table.stories.mdx';
import classNames from 'classnames';
import styles from './Table.stories.css';
import Icon from '../../assets/images/icons/web/arrow-down-black.svg';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  return <Table {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  headerList: ['First Name', 'Last Name', 'Handle', 'User Type', 'Status'],
  tableContent: [
    ['John', 'Oto', '@timo', 'type1', 'Active'],
    ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
    ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
    ['Lary', 'King', '@timo', 'type1', 'Inactive'],
    ['Helen', 'Bonham', '@timo', 'type2', 'Active'],
    ['Felix', 'Dougherty', '@timo', 'type1', 'Active'],
    ['Joseph', 'Thomas', '@timo', 'type1', 'Inactive'],
    ['Richard', 'Cardenas', '@timo', 'type1', 'Active'],
    ['Karl', 'Roy', '@twitter', 'type2', 'Active'],
    ['Sean', 'Steppe', '@timo', 'type1', 'Inactive'],
    ['Samuel', 'Marriott', '@twitter', 'type1', 'Inactive']
  ]
};

export const TableWithIcons = Template.bind({});
TableWithIcons.args = {
  headerList: ['First Name', 'Last Name', 'Handle', 'User Type', 'Status'],
  headerButtonsList: [
    <Icon key='1' />,
    <Icon key='2' />,
    <Icon key='3' />,
    <Icon key='4' />,
    <Icon key='5' />
  ],
  tableContent: [
    ['John', 'Oto', '@timo', 'type1', 'Active'],
    ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
    ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
    ['Lary', 'King', '@timo', 'type1', 'Inactive'],
    ['Helen', 'Bonham', '@timo', 'type2', 'Active'],
    ['Felix', 'Dougherty', '@timo', 'type1', 'Active'],
    ['Joseph', 'Thomas', '@timo', 'type1', 'Inactive'],
    ['Richard', 'Cardenas', '@timo', 'type1', 'Active'],
    ['Karl', 'Roy', '@twitter', 'type2', 'Active'],
    ['Sean', 'Steppe', '@timo', 'type1', 'Inactive'],
    ['Samuel', 'Marriott', '@twitter', 'type1', 'Inactive']
  ]
};

const firstName = <p>First Name</p>;
const lastName = <p>Last Name</p>;
const type = <p>Type</p>;
const handle = <p>Type</p>;
const status = <p>Status</p>;

export const PassingElementsAsHeader = Template.bind({});
PassingElementsAsHeader.args = {
  headerList: [firstName, lastName, handle, type, status],
  tableContent: [
    ['John', 'Oto', '@timo', 'type1', 'Active'],
    ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
    ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
    ['Lary', 'King', '@timo', 'type1', 'Inactive'],
    ['Helen', 'Bonham', '@timo', 'type2', 'Active'],
    ['Felix', 'Dougherty', '@timo', 'type1', 'Active'],
    ['Joseph', 'Thomas', '@timo', 'type1', 'Inactive'],
    ['Richard', 'Cardenas', '@timo', 'type1', 'Active'],
    ['Karl', 'Roy', '@twitter', 'type2', 'Active'],
    ['Sean', 'Steppe', '@timo', 'type1', 'Inactive'],
    ['Samuel', 'Marriott', '@twitter', 'type1', 'Inactive']
  ]
};

export const CustomStyledTable = Template.bind({});
CustomStyledTable.args = {
  headerList: ['First Name', 'Last Name', 'Handle', 'User Type', 'Status'],
  tableContent: [
    ['John', 'Oto', '@timo', 'type1', 'Active'],
    ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
    ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
    ['Lary', 'King', '@timo', 'type1', 'Inactive'],
    ['Helen', 'Bonham', '@timo', 'type2', 'Active'],
    ['Felix', 'Dougherty', '@timo', 'type1', 'Active'],
    ['Joseph', 'Thomas', '@timo', 'type1', 'Inactive'],
    ['Richard', 'Cardenas', '@timo', 'type1', 'Active'],
    ['Karl', 'Roy', '@twitter', 'type2', 'Active'],
    ['Sean', 'Steppe', '@timo', 'type1', 'Inactive'],
    ['Samuel', 'Marriott', '@twitter', 'type1', 'Inactive']
  ],
  variablesClassName: classNames(styles['custom-table'])
};
