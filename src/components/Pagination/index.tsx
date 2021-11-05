import React from 'react';
// eslint-disable-next-line no-unused-vars
import Button, { Position } from '@/components/Button';
import classNames from 'classnames';
import { getSelectedPage } from './utils';

import styles from '@/components/Pagination/Pagination.css';
export interface Props {
  totalPages: number;
  numberOfPagesToShow: number;
  currentPage: number;
  onSelectPage: (item: number) => any;
  buttonNextLabel?: string;
  buttonNextIcon?: React.ReactNode;
  buttonNextIconPosition?: Position;
  buttonPrevLabel?: string;
  buttonPrevIcon?: React.ReactNode;
  buttonPrevIconPosition?: Position;
  buttonVariablesClassName?: string;
  variablesClassName?: string;
}

const Pagination = (props: Props) => {
  const {
    totalPages,
    numberOfPagesToShow,
    currentPage,
    onSelectPage,
    buttonNextLabel,
    buttonNextIcon,
    buttonNextIconPosition,
    buttonPrevLabel,
    buttonPrevIcon,
    buttonPrevIconPosition,
    buttonVariablesClassName,
    variablesClassName
  } = props;

  const selectedPage = getSelectedPage(currentPage, totalPages);
  const nonSelected = Math.floor(numberOfPagesToShow / 2);
  const min = selectedPage - nonSelected > 0 ? selectedPage - nonSelected : 1;
  const pagesLength = numberOfPagesToShow < totalPages ? numberOfPagesToShow : totalPages;

  const pages = Array.from({ length: pagesLength }, (_, i) => {
    if (totalPages < numberOfPagesToShow) {
      return min + i;
    } else if (totalPages < numberOfPagesToShow + selectedPage) {
      return totalPages - numberOfPagesToShow + i + 1;
    } else {
      return min + i;
    }
  });

  return (
    <ul
      className={classNames(styles['pagination-list'], variablesClassName)}
      data-testid='pagination-element'
    >
      <li>
        <Button
          variablesClassName={buttonVariablesClassName}
          withAppendIcon={!!buttonPrevIcon}
          appendIcon={buttonPrevIcon}
          iconPosition={buttonPrevIconPosition}
          size='medium'
          text={buttonPrevLabel}
          disabled={selectedPage === 1}
          onClick={() => onSelectPage(selectedPage - 1)}
        />
      </li>
      {numberOfPagesToShow > 0 &&
        pages.map(item => (
          <li key={item}>
            <Button
              size='medium'
              text={item.toString()}
              category={selectedPage === item ? 'primary' : 'neutral'}
              onClick={() => onSelectPage(item)}
            />
          </li>
        ))}
      <li>
        <Button
          variablesClassName={buttonVariablesClassName}
          withAppendIcon={!!buttonPrevIcon}
          appendIcon={buttonNextIcon}
          iconPosition={buttonNextIconPosition}
          size='medium'
          text={buttonNextLabel}
          disabled={selectedPage === totalPages}
          onClick={() => onSelectPage(selectedPage + 1)}
        />
      </li>
    </ul>
  );
};

export default Pagination;

Pagination.defaultProps = {
  numberOfPagesToShow: 3,
  currentPage: 1,
  buttonNextLabel: 'Next',
  buttonNextIconPosition: 'right',
  buttonPrevLabel: 'Prev',
  buttonPrevIconPosition: 'left'
};
