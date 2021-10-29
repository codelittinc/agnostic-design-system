import React from 'react';
import classNames from 'classnames';

import styles from '@/components/Table/Table.css';
export interface Props {
  headerList: React.ReactNode[];
  tableContent: React.ReactNode[][];
  footerList?: React.ReactNode[];
  variablesClassName?: string;
}

const Table = (props: Props) => {
  const { headerList, tableContent, footerList, variablesClassName } = props;

  return (
    <table className={classNames(variablesClassName, styles['table-container'])}>
      <thead data-testid='table-header'>
        <tr>
          {headerList.map((header, headerIndex) => (
            <th key={headerIndex}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody data-testid='table-body'>
        {tableContent.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((content, contentIndex) => (
              <td key={`${rowIndex} - ${contentIndex}`}> {content}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {footerList && (
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
