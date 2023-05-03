import React, { useState } from 'react';
import Table from '@/components/Table';
import { Meta } from '@storybook/react';
import mdx from './Table.stories.mdx';
import classNames from 'classnames';
import styles from './Table.stories.css';

export default {
  title: 'Components/Content/Table',
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

const SortableTableTemplate = args => {
  const [sortState, setSortState] = useState({});

  return (
    <>
      <p>Sort Field: {'sortField' in sortState && sortState.sortField}</p>
      <p>Sort Order: {'sortOrder' in sortState && sortState.sortOrder}</p>
      <hr />
      <Table {...args} setSortState={setSortState} />
    </>
  );
};

const headerList = ['First Name', 'Last Name', 'Handle', 'User Type', 'Status'];
const tableContent = [
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
];

export const Default = Template.bind({});
Default.args = {
  headerList,
  tableContent
};

const firstName = <p>First Name</p>;
const lastName = <p>Last Name</p>;
const type = <p>Type</p>;
const handle = <p>Type</p>;
const status = <p>Status</p>;

export const PassingElementsAsHeader = Template.bind({});
PassingElementsAsHeader.args = {
  headerList: [firstName, lastName, handle, type, status],
  tableContent
};

export const CustomStyledTable = Template.bind({});
CustomStyledTable.args = {
  headerList,
  tableContent,
  variablesClassName: classNames(styles['custom-table'])
};

export const SortableTable = SortableTableTemplate.bind({});
SortableTable.args = {
  headerList,
  tableContent
};
