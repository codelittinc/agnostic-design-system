import React, { useState } from 'react';
import NumericInput from '@/components/NumericInput';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';

import styles from '@/components/PaginatedTable/PaginatedTable.css';
import { isEmpty } from 'lodash';
export interface Props {
  currentPage: number;
  id?: string;
  handlePageChange: (value: number) => void;
  headerList: React.ReactNode[];
  itemsOnCurrentPage: React.ReactNode[][];
  totalNumberOfItems: number;
  variablesClassName?: string;
}

const PaginatedTable = (props: Props) => {
  const {
    currentPage,
    handlePageChange,
    headerList,
    id,
    itemsOnCurrentPage,
    totalNumberOfItems,
    variablesClassName
  } = props;

  const [uniqueId] = useState(id || Math.floor(Math.random() * 1000 + 1));

  const numItemsPerPage = itemsOnCurrentPage.length;
  const numberOfPages = Math.ceil(totalNumberOfItems / numItemsPerPage);

  const handleChange = event => {
    const { value } = event.target;

    if (value > 0 || isEmpty(value)) {
      handlePageChange(value);
    }
  };

  const initialRange = (currentPage - 1) * numItemsPerPage + 1;
  const itemsRangeBegin = initialRange > 0 ? initialRange : 1;
  const itemsRangeEnd = () => {
    const total = itemsRangeBegin + numItemsPerPage;
    return total > totalNumberOfItems ? totalNumberOfItems : total;
  };

  const widthFirstFooterCell = headerList.length - 2;

  return (
    <Table
      headerList={headerList}
      tableContent={itemsOnCurrentPage}
      variablesClassName={variablesClassName}
      renderFooter={() => (
        <tfoot className={styles['paginated-footer']}>
          <tr>
            <td className={styles['pagination-items']}>
              {itemsRangeBegin} - {itemsRangeEnd()} of {totalNumberOfItems} items
            </td>
            <td className={styles['number-of-pages']} colSpan={widthFirstFooterCell}>
              <NumericInput
                id={`paginated-table-input-${uniqueId}`}
                max={numberOfPages}
                onChange={handleChange}
                onStateChange={() => {}}
                onFocus={() => {}}
                scale={0}
                size='medium'
                value={currentPage.toString()}
                variablesClassName={styles['number-of-pages-input']}
                positive
              />
              <span>of {numberOfPages} pages</span>
            </td>
            <td className={styles['paginated-table-action-btns']}>
              <Pagination
                totalPages={numberOfPages}
                numberOfPagesToShow={0}
                currentPage={currentPage}
                onSelectPage={handlePageChange}
                buttonNextLabel='Next'
                buttonNextIcon={<span> &rarr; </span>}
                buttonNextIconPosition='right'
                buttonPrevLabel='Prev'
                buttonPrevIcon={<span> &larr; </span>}
                buttonPrevIconPosition='left'
                buttonVariablesClassName={styles['btn-table-paginated']}
                variablesClassName={styles['paginated-table-pagination']}
              />
            </td>
          </tr>
        </tfoot>
      )}
    />
  );
};

export default PaginatedTable;

PaginatedTable.defaultProps = {
  headerList: [],
  tableContent: [[]]
};
