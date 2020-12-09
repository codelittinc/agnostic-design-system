import React from 'react';
import classNames from 'classnames';
import styles from '../Grid.css';

type ColSizeIndex = {
  [key: string]: number | undefined;
};

type XSColumns = 1 | 2 | 3 | 4;
type SMColumns = XSColumns | 5 | 6 | 7 | 8;
type MDAndUpColumns = XSColumns | SMColumns | 9 | 10 | 11 | 12;
type LGAndUpColumns = MDAndUpColumns | 13 | 14 | 15 | 16;

interface PropTypes {
  /**
   * Number of columns for extra-small devices (phones).
   * Accepts values from 1 to 4, which means that each column has a min-width of 25%.
   */
  xs?: XSColumns;

  /**
   * Number of offset columns for extra-small devices (phones).
   * Accepts values from 1 to 4, which means that each column has a min-width of 25%.
   */
  xsOffset?: XSColumns;

  /**
   * Number of columns for small devices (tablets).
   * Accepts values from 1 to 8, which means that each column has a min-width of 12.5%.
   */
  sm?: SMColumns;

  /**
   * Number of offset columns for small devices (tablets).
   * Accepts values from 1 to 8, which means that each column has a min-width of 12.5%.
   */
  smOffset?: SMColumns;

  /**
   * Number of columns for medium devices (small desktops).
   * Accepts values from 1 to 12, which means that each column has a min-width of 8.33%.
   */
  md?: MDAndUpColumns;

  /**
   * Number of offset columns for medium devices (small desktops).
   * Accepts values from 1 to 12, which means that each column has a min-width of 8.33%.
   */
  mdOffset?: MDAndUpColumns;

  /**
   * Number of columns for large devices (desktop).
   * Accepts values from 1 to 12, which means that each column has a min-width of 8.33%.
   */

  lg?: LGAndUpColumns;
  /**
   * Number of offset columns for large devices (desktop).
   * Accepts values from 1 to 16, which means that each column has a min-width of 8.33%.
   */
  lgOffset?: LGAndUpColumns;
  /**
   * Number of offset columns for large devices (desktop).
   * Accepts values from 1 to 16, which means that each column has a min-width of 8.33%.
   */
  xl?: LGAndUpColumns;
  /**
   * Number of offset columns for large devices (desktop).
   * Accepts values from 1 to 16, which means that each column has a min-width of 6.25%.
   */
  xlOffset?: LGAndUpColumns;
  /**
   * Number of offset columns for large devices (desktop).
   * Accepts values from 1 to 16, which means that each column has a min-width of 6.25%.
   */
  xxl?: LGAndUpColumns;
  /**
   * Number of offset columns for large devices (desktop).
   * Accepts values from 1 to 16, which means that each column has a min-width of 6.25%.
   */
  xxlOffset?: LGAndUpColumns;
  variablesClassName?: string;
}

const getClasses = (cols: ColSizeIndex, type: string) => {
  return Object.keys(cols).map((size: string) => {
    const sizeValue: number | undefined = cols[size];

    if (!sizeValue) {
      return;
    }
    return styles[`codelitt-${type}-${size}-${sizeValue}`];
  });
};

const Col: React.FC<PropTypes> = props => {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    xsOffset,
    smOffset,
    mdOffset,
    lgOffset,
    xlOffset,
    xxlOffset,
    variablesClassName,
    ...attributes
  } = props;

  const colSizes: ColSizeIndex = { xs, sm, md, lg, xl, xxl };

  const offsetSizes: ColSizeIndex = {
    xs: xsOffset,
    sm: smOffset,
    md: mdOffset,
    lg: lgOffset,
    xl: xlOffset,
    xxl: xxlOffset
  };

  const colClasses: string[] = [
    ...getClasses(colSizes, 'col'),
    ...getClasses(offsetSizes, 'offset')
  ].filter(c => c);

  if (!colClasses.length) {
    colClasses.push(styles['codelitt-col-xs-4']);
  }

  return (
    <div
      {...attributes}
      className={classNames(styles['codelitt-col'], colClasses, variablesClassName)}
    />
  );
};

export default Col;
