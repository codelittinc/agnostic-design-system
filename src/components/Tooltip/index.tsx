import React from 'react';
import classNames from 'classnames';
import styles from './Tooltip.css';

type TooltipPosition = 'top' | 'bottom' | 'right' | 'left';

interface Props {
  content: React.ReactNode | string;
  children: React.ReactElement;
  position: TooltipPosition;
  variablesClassName?: string;
}

const Tooltip: React.FC<Props> = props => {
  const { content, children, position, variablesClassName } = props;

  return (
    <div className={classNames(styles['tooltip-wrapper'])}>
      <div className={classNames(styles['tooltip-children'])}>{children}</div>

      <div
        className={classNames(styles.tooltip, styles[`tooltip-${position}`], variablesClassName)}
      >
        <div className={classNames(styles['tooltip-content'])}>{content}</div>
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  position: 'top'
};

export default Tooltip;
