import React, { useState } from 'react';
import PaginatedTable from '@/components/PaginatedTable';
import { Meta } from '@storybook/react';
import mdx from './PaginatedTable.stories.mdx';

export default {
  title: 'Components/PaginatedTable',
  component: PaginatedTable,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [page, setPage] = useState(1);
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
      ['Samuel', 'Marriott', '@twitter', 'type1', 'Inactive']
    ]
  ];

  return (
    <PaginatedTable
      {...args}
      currentPage={page}
      handlePageChange={setPage}
      itemsOnCurrentPage={listOfItems[page - 1]}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  headerList: ['First Name', 'Last Name', 'Handle', 'User Type', 'Status'],
  totalNumberOfItems: 15
};
