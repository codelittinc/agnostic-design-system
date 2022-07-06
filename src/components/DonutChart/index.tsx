import React, { useState } from 'react';
import styles from '@/components/DonutChart/DonutChart.css';
import classnames from 'classnames';

interface Props {
  completion: number;
  enableTooltip?: boolean;
  fullCircleTooltip?: string | React.ReactNode;
  iconForMessage?: React.ReactNode;
  indicatorTooltip?: string | React.ReactNode;
  message?: string | React.ReactNode;
  renderCompletionValue?: boolean;
  size: number;
  strokewidth: number;
  variablesClassName?: string;
}

const DonutChart = (props: Props) => {
  const {
    completion,
    enableTooltip,
    fullCircleTooltip,
    iconForMessage,
    indicatorTooltip,
    message,
    renderCompletionValue = true,
    size,
    strokewidth,
    variablesClassName
  } = props;

  const [showFullCircleTooltip, setShowFullCircleTooltip] = useState(true);
  const [showIndicatorTooltip, setShowIndicatorTooltip] = useState(false);

  const halfsize = size * 0.5;
  const radius = halfsize - strokewidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (completion * circumference) / 100;
  const dashval = strokeval + ' ' + circumference;

  const trackstyle = { strokeWidth: strokewidth };
  const indicatorstyle = { strokeWidth: strokewidth, strokeDasharray: dashval };
  const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')';

  return (
    <div className={classnames(styles.wrapper, variablesClassName)}>
      {showFullCircleTooltip && (
        <div className={classnames(styles['tooltip-wrapper'], styles['full-circle-tooltip-wrapper'])}>
          <div className={styles.tooltip}>{fullCircleTooltip}</div>
        </div>
      )}

      {showIndicatorTooltip && (
        <div className={classnames(styles['tooltip-wrapper'], styles['indicator-tooltip-wrapper'])}>
          <div className={styles.test}>{indicatorTooltip}</div>
        </div>
      )}

      <svg width={size} height={size} className={styles.donutchart}>
        <circle
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={trackstyle}
          className={styles['donutchart-full-circle']}
          id="donutchart-full-circle"
          onMouseOver={() => enableTooltip && setShowFullCircleTooltip(true)}
          onMouseLeave={() => enableTooltip && setShowFullCircleTooltip(false)}
        />

        <circle
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={indicatorstyle}
          className={styles['donutchart-indicator']}
          onMouseOver={() => enableTooltip && setShowIndicatorTooltip(true)}
          onMouseLeave={() => enableTooltip && setShowIndicatorTooltip(false)}
        />
        <text className={styles['donutchart-text']} x={halfsize} y={halfsize} />
      </svg>

      <span className={styles['donutchart-text']}>
        {renderCompletionValue && (
          <span className={styles['donutchart-completion-value']}>{completion}</span>
        )}

        {message && (
          <span className={styles['donutchart-message']}>
            {iconForMessage} {message}
          </span>
        )}
      </span>
    </div>
  );
};

export default DonutChart;
