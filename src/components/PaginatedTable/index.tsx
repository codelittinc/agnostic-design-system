import React, { useState } from 'react';
import NumericInput from '@/components/NumericInput';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import classNames from 'classnames';
import styles from '@/components/PaginatedTable/PaginatedTable.css';
import { isEmpty } from 'lodash';

export interface Props {
  buttonNextIcon: React.ReactNode;
  buttonPrevIcon: React.ReactNode;
  currentPage: number;
  handlePageChange: (value: number) => void;
  headerList: React.ReactNode[];
  id?: string;
  itemsOnCurrentPage: React.ReactNode[][];
  limit: number;
  totalNumberOfItems: number;
  variablesClassName?: string;
}

const defaultButtonNextIcon = <span> &rarr; </span>;
const defaultButtonPrevIcon = <span> &larr; </span>;

const PaginatedTable = (props: Props) => {
  const {
    buttonNextIcon = defaultButtonNextIcon,
    buttonPrevIcon = defaultButtonPrevIcon,
    currentPage,
    handlePageChange,
    headerList,
    id,
    itemsOnCurrentPage,
    limit,
    totalNumberOfItems,
    variablesClassName
  } = props;

  const [uniqueId] = useState(id || Math.floor(Math.random() * 1000 + 1));

  const numberOfPages = Math.ceil(totalNumberOfItems / limit);

  const handleChange = event => {
    const { value } = event.target;

    if (value > 0 || isEmpty(value)) {
      handlePageChange(value);
    }
  };

  const itemsRangeBegin = () => {
    if (itemsOnCurrentPage) {
      return (currentPage - 1) * limit + 1;
    }
    return 0;
  };

  const itemsRangeEnd = () => {
    if (itemsOnCurrentPage) {
      const begin = itemsRangeBegin();
      const total = begin + itemsOnCurrentPage.length - 1;
      return Math.min(total, totalNumberOfItems);
    }
    return 0;
  };

  const widthFirstFooterCell = headerList.length - 1;

  return (
    <Table
      headerList={headerList}
      tableContent={itemsOnCurrentPage}
      variablesClassName={variablesClassName}
      renderFooter={() => (
        <tfoot className={styles['paginated-footer']}>
          <tr>
            <td className={styles['pagination-items']}>
              {itemsRangeBegin() !== 0
                ? `${itemsRangeBegin()} - ${itemsRangeEnd()} of ${totalNumberOfItems} items`
                : `-`}
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
              <span className={styles['number-of-pages-text']}>of {numberOfPages} pages</span>

              <Pagination
                totalPages={numberOfPages}
                numberOfPagesToShow={0}
                currentPage={currentPage}
                onSelectPage={handlePageChange}
                buttonNextLabel='Next'
                buttonNextIcon={buttonNextIcon}
                buttonNextIconPosition='right'
                buttonPrevLabel='Prev'
                buttonPrevIcon={buttonPrevIcon}
                buttonPrevIconPosition='left'
                buttonVariablesClassName={classNames(
                  styles['btn-table-paginated'],
                  variablesClassName
                )}
                variablesClassName={classNames(
                  styles['paginated-table-action-btns'],
                  variablesClassName
                )}
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
