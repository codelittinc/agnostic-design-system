import React, { useEffect, useState } from 'react';
import ArrowDown from '@/assets/images/icons/web/arrow-down.svg';
import ArrowUp from '@/assets/images/icons/web/arrow-up.svg';
import classNames from 'classnames';

import styles from '@/components/Table/Table.css';
export interface Props {
  footerList?: React.ReactNode[];
  headerList: React.ReactNode[] | string[];
  onRowClick?: (row: React.ReactNode, rowIndex: number) => void;
  onRowMouseEnter?: (row: React.ReactNode, rowIndex: number) => void;
  onRowMouseLeave?: (row?: React.ReactNode, rowIndex?: number) => void;
  renderFooter?: () => React.ReactNode;
  sortIcon?: React.ReactNode | { iconAsc: React.ReactNode; iconDesc: React.ReactNode };
  setSortState?: (value: {
    sortField: string | React.ReactNode;
    sortOrder: 'ASC' | 'DESC';
  }) => void;
  tableContent: React.ReactNode[][];
  variablesClassName?: string;
}

const Table = (props: Props) => {
  const {
    footerList,
    headerList,
    onRowClick,
    onRowMouseEnter,
    onRowMouseLeave,
    renderFooter,
    sortIcon,
    setSortState,
    tableContent,
    variablesClassName
  } = props;

  const [sortStatus, setSortStatus] = useState<{
    sortField: string | React.ReactNode;
    sortOrder: 'ASC' | 'DESC';
  }>({
    sortField: headerList[0],
    sortOrder: 'ASC'
  });

  useEffect(() => {
    setSortState && setSortState(sortStatus);
  }, [sortStatus, setSortState]);

  const handleRowClick = (row, rowIndex) => {
    if (onRowClick) {
      onRowClick(row, rowIndex);
    }
  };

  const handleRowMouseEnter = (row, rowIndex) => {
    if (onRowMouseEnter) {
      onRowMouseEnter(row, rowIndex);
    }
  };

  const handleRowMouseLeave = (row, rowIndex) => {
    if (onRowMouseLeave) {
      onRowMouseLeave(row, rowIndex);
    }
  };

  const updateSortingStatus = header => {
    if (setSortState && typeof header === 'string') {
      setSortStatus({
        sortField: header,
        sortOrder:
          sortStatus.sortField === header && sortStatus.sortOrder === 'ASC' ? 'DESC' : 'ASC'
      });
    }
  };

  const renderSortIcon = (header: string) => {
    const icons =
      !!setSortState && !sortIcon
        ? {
            iconAsc: <ArrowUp className={classNames(styles['arrow-icon'])} />,
            iconDesc: <ArrowDown className={classNames(styles['arrow-icon'])} />
          }
        : sortIcon;

    if (!!icons && typeof icons === 'object' && 'iconAsc' in icons && 'iconDesc' in icons) {
      return sortStatus?.sortOrder === 'ASC' && sortStatus.sortField === header
        ? icons.iconAsc
        : icons.iconDesc;
    }

    return icons;
  };

  return (
    <table
      className={classNames(variablesClassName, styles['table-container'])}
      data-testid='table-element'
    >
      <thead data-testid='table-header'>
        <tr>
          {headerList.map((header, headerIndex) => (
            <th
              onClick={() => updateSortingStatus(header)}
              key={headerIndex}
              className={setSortState && classNames(styles['sortable-header'])}
            >
              {header}
              {renderSortIcon(header)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody data-testid='table-body'>
        {tableContent.map((row, rowIndex) => (
          <tr
            className={onRowClick ? styles['clickable-row'] : styles['non-clickable-row']}
            tabIndex={0}
            key={rowIndex}
            onClick={() => handleRowClick(row, rowIndex)}
            onMouseEnter={() => handleRowMouseEnter(row, rowIndex)}
            onMouseLeave={() => handleRowMouseLeave(row, rowIndex)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleRowClick(row, rowIndex);
              }
            }}
          >
            {row.map((content, contentIndex) => (
              <td key={`${rowIndex} - ${contentIndex}`}> {content}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {renderFooter
        ? renderFooter()
        : footerList && (
            <tfoot>
              <tr>
                {footerList.map((foot, footIndex) => (
                  <th key={footIndex}>{foot}</th>
                ))}
              </tr>
            </tfoot>
          )}
    </table>
  );
};

export default Table;

Table.defaultProps = {
  headerList: [],
  tableContent: [[]]
};
