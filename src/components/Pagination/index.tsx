import React from 'react';
// eslint-disable-next-line no-unused-vars
import Button, { Position } from '@/components/Button';
import classNames from 'classnames';
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
    buttonPrevIconPosition
  } = props;

  const nonSelected = Math.floor(numberOfPagesToShow / 2);
  const min = currentPage - nonSelected > 0 ? currentPage - nonSelected : 1;

  const pages = Array.from({ length: numberOfPagesToShow }, (_, i) => {
    if (totalPages < numberOfPagesToShow + currentPage) {
      return totalPages - numberOfPagesToShow + i + 1;
    } else {
      return min + i;
    }
  });

  return (
    <ul className={classNames(styles['pagination-list'])} data-testid='pagination-element'>
      <li>
        <Button
          withAppendIcon={!!buttonPrevIcon}
          appendIcon={buttonPrevIcon}
          iconPosition={buttonPrevIconPosition}
          size='medium'
          text={buttonPrevLabel}
          disabled={currentPage === 1}
          onClick={() => onSelectPage(currentPage - 1)}
        />
      </li>
      {pages.map(item => (
        <li key={item}>
          <Button
            size='medium'
            text={item.toString()}
            category={`${currentPage === item ? 'primary' : 'neutral'}`}
            onClick={() => onSelectPage(item)}
          />
        </li>
      ))}
      <li>
        <Button
          withAppendIcon={!!buttonPrevIcon}
          appendIcon={buttonNextIcon}
          iconPosition={buttonNextIconPosition}
          size='medium'
          text={buttonNextLabel}
          disabled={currentPage === totalPages}
          onClick={() => onSelectPage(currentPage + 1)}
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
