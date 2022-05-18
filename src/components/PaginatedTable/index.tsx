import React, { useState } from 'react';
import NumericInput from '@/components/NumericInput';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import classNames from 'classnames';
import ArrowLeft from '@/assets/images/icons/web/arrow-left.svg';
import ArrowRight from '@/assets/images/icons/web/arrow-right.svg';
import styles from '@/components/PaginatedTable/PaginatedTable.css';
import { isEmpty } from 'lodash';

export interface Props {
  currentPage: number;
  handlePageChange: (value: number) => void;
  onRowClick?: (row: React.ReactNode, rowIndex: number) => void;
  headerList: React.ReactNode[];
  id?: string;
  itemsOnCurrentPage: React.ReactNode[][];
  limit: number;
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
    limit,
    onRowClick,
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

  const widthFirstFooterCell = headerList.length;

  return (
    <Table
      headerList={headerList}
      tableContent={itemsOnCurrentPage}
      variablesClassName={variablesClassName}
      onRowClick={onRowClick}
      renderFooter={() => (
        <tfoot className={styles['paginated-footer']}>
          <tr>
            <td colSpan={widthFirstFooterCell}>
              <div className={styles['paginated-footer-wrapper']}>
                <div className={styles['pagination-items']}>
                  {' '}
                  {itemsRangeBegin() !== 0
                    ? `${itemsRangeBegin()} - ${itemsRangeEnd()} of ${totalNumberOfItems} items`
                    : `-`}
                </div>
                <div className={styles['paginated-table-pages']}>
                  <div className={styles['number-of-pages']}>
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
                  </div>
                  <div className={styles['paginated-table-action-btns']}>
                    <Pagination
                      totalPages={numberOfPages}
                      numberOfPagesToShow={0}
                      currentPage={currentPage}
                      onSelectPage={handlePageChange}
                      buttonNextLabel='Next'
                      buttonNextIcon={<ArrowRight />}
                      buttonNextIconPosition='right'
                      buttonPrevLabel='Prev'
                      buttonPrevIcon={<ArrowLeft />}
                      buttonPrevIconPosition='left'
                      buttonVariablesClassName={classNames(
                        styles['btn-table-paginated'],
                        variablesClassName
                      )}
                      variablesClassName={classNames(
                        styles['paginated-table-pagination'],
                        variablesClassName
                      )}
                    />
                  </div>
                </div>
              </div>
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
