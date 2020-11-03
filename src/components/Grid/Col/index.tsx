import React from 'react';
import classNames from 'classnames';
import styles from '../Grid.css';

type ColSizeIndex = {
  [key: string]: number | undefined;
};

type XSColumns = 1 | 2 | 3 | 4;
type SMColumns = XSColumns | 5 | 6 | 7 | 8;
type MDAndUpColumns = XSColumns | SMColumns | 9 | 10 | 11 | 12;

interface PropTypes {
  /**
   * Number of columns for extra-small devices (phones).
   * Accepts values from 1 to 4, which means that each column has a min-width of 25%.
   */
  xs?: XSColumns;

  /**
   * Number of columns for small devices (tablets).
   * Accepts values from 1 to 8, which means that each column has a min-width of 12.5%.
   */
  sm?: SMColumns;

  /**
   * Number of columns for medium devices (small desktops).
   * Accepts values from 1 to 12, which means that each column has a min-width of 8.33%.
   */
  md?: MDAndUpColumns;

  /**
   * Number of columns for large devices (desktop).
   * Accepts values from 1 to 12, which means that each column has a min-width of 8.33%.
   */
  lg?: MDAndUpColumns;

  /**
   * You can pass a custom class to the `<Col>` element
   */
  wrapperClassName?: string;
}

const Col: React.FC<PropTypes> = (props: PropTypes) => {
  const { wrapperClassName, xs, sm, md, lg, ...attributes } = props;

  const colClasses: string[] = [];

  const sizes: ColSizeIndex = {
    xs,
    sm,
    md,
    lg,
  };

  Object.keys(sizes).forEach((size: string) => {
    const sizeValue: number | undefined = sizes[size];

    if (!sizeValue) {
      return;
    }

    colClasses.push(styles[`codelitt-col-${size}-${sizeValue}`]);
  });

  if (!colClasses.length) {
    colClasses.push(styles['codelitt-col-xs-4']);
  }

  return (
    <div {...attributes} className={classNames(colClasses, wrapperClassName)} />
  );
};

export default Col;
