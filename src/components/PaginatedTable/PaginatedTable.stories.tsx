import React, { useState } from 'react';
import PaginatedTable from '@/components/PaginatedTable';
import EmptyState from '../EmptyState';
import { Meta } from '@storybook/react';
import mdx from './PaginatedTable.stories.mdx';
import classNames from 'classnames';
import styles from './PaginatedTableTest.css';

export default {
  title: 'Components/Content/PaginatedTable',
  component: PaginatedTable,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [page, setPage] = useState(1);
  const listOfItems = args.listOfItems[page - 1];
  return (
    <PaginatedTable
      {...args}
      currentPage={page}
      handlePageChange={setPage}
      itemsOnCurrentPage={listOfItems}
    />
  );
};

const listOfItems = [
  [
    ['John', 'Oto', '@timo', 'type1', 'Active'],
    ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
    ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
    ['Lary', 'King', '@timo', 'type1', 'Inactive'],
    ['Helen', 'Bonham', '@timo', 'type2', 'Active']
  ],
  [
    ['Bary', 'King', '@timo', 'type1', 'Inactive'],
    ['elen', 'Bonham', '@timo', 'type2', 'Active'],
    ['Felix', 'Dougherty', '@timo', 'type1', 'Active'],
    ['Joseph', 'Thomas', '@timo', 'type1', 'Inactive'],
    ['Richard', 'Cardenas', '@timo', 'type1', 'Active']
  ],
  [
    ['Ronis', 'Cardenas', '@timo', 'type1', 'Active'],
    ['Karl', 'Roy', '@twitter', 'type2', 'Active'],
    ['Sean', 'Steppe', '@timo', 'type1', 'Inactive'],
    ['Ruth', 'Cardenas', '@timo', 'type1', 'Active'],
    ['Ivan', 'Cardenas', '@timo', 'type1', 'Active']
  ]
];

export const Default = Template.bind({});
Default.args = {
  headerList: ['First Name', 'Last Name', 'Handle', 'User Type', 'Status'],
  totalNumberOfItems: 15,
  listOfItems,
  limit: 5
};

const listOfItemsIrregular = [
  [
    ['John', 'Oto', '@timo', 'type1', 'Active'],
    ['Mark', 'Howard', '@mdo', 'type2', 'Inactive'],
    ['Jacob', 'Martin', '@mdo', 'type1', 'Active'],
    ['Lary', 'King', '@timo', 'type1', 'Inactive'],
    ['Helen', 'Bonham', '@timo', 'type2', 'Active'],
    ['Bary', 'King', '@timo', 'type1', 'Inactive'],
    ['Bary', 'King', '@timo', 'type1', 'Inactive']
  ],
  [
    ['Bary', 'King', '@timo', 'type1', 'Inactive'],
    ['elen', 'Bonham', '@timo', 'type2', 'Active'],
    ['Felix', 'Dougherty', '@timo', 'type1', 'Active']
  ]
];

export const IrregularList = Template.bind({});
IrregularList.args = {
  headerList: ['First Name', 'Last Name', 'Handle', 'User Type', 'Status'],
  totalNumberOfItems: 10,
  listOfItems: listOfItemsIrregular,
  limit: 7
};

export const CustomizedTable = Template.bind({});
CustomizedTable.args = {
  headerList: ['First Name', 'Last Name', 'Handle', 'User Type', 'Status'],
  totalNumberOfItems: 15,
  listOfItems,
  limit: 5,
  variablesClassName: classNames(styles['custom-table'])
};

export const onRowClick = Template.bind({});
const handleRowClick = (row, rowIndex) => {
  alert('You selected the row ' + rowIndex + ' which contains the following data: ' + row);
};

onRowClick.args = {
  headerList: ['First Name', 'Last Name', 'Handle', 'User Type', 'Status'],
  totalNumberOfItems: 15,
  listOfItems,
  limit: 5,
  onRowClick: handleRowClick
};

function RowHoverTable() {
  const [page, setPage] = useState(1);
  const [rowValues, setRowValues] = useState([]);
  const [rowIndexNum, setRowIndexNum] = useState('-');

  const handleRowHover = (row, rowIndex) => {
    setRowValues(row);
    setRowIndexNum(rowIndex);
  };

  const handleRowMouseLeave = () => {
    setRowValues([]);
    setRowIndexNum('-');
  };

  return (
    <div>
      <h4>
        You hovered the row
        <span style={{ color: 'red' }}>&nbsp;{rowIndexNum}&nbsp;</span>
        which contains the following data:&nbsp;
        {rowValues.map((row, index) => (
          <span key={index} style={{ color: 'red' }}>
            {row}&nbsp;
          </span>
        ))}
      </h4>

      <PaginatedTable
        currentPage={page}
        handlePageChange={setPage}
        itemsOnCurrentPage={listOfItems[page - 1]}
        headerList={['First Name', 'Last Name', 'Handle', 'User Type', 'Status']}
        totalNumberOfItems={15}
        listOfItems={listOfItems}
        limit={5}
        onRowMouseEnter={handleRowHover}
        onRowMouseLeave={handleRowMouseLeave}
      />
    </div>
  );
}
export const onRowHover = () => <RowHoverTable />;

const renderEmptyState = () => {
  return <EmptyState description='' title='No results found' />;
};

export const EmptyTable = Template.bind({});
EmptyTable.args = {
  headerList: [],
  totalNumberOfItems: 0,
  listOfItems: [],
  renderEmptyState
};
