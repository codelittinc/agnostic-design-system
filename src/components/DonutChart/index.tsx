import React from 'react';
import styles from '@/components/DonutChart/DonutChart.css';
import classnames from 'classnames';

interface Props {
  size: number;
  strokewidth: number;
  completion: number;
  message?: string;
  iconForMessage?: React.ReactNode;
  variablesClassName?: string;
}

const DonutChart = (props: Props) => {
  const { size, strokewidth, completion, message, iconForMessage, variablesClassName } = props;

  const halfsize = size * 0.5;
  const radius = halfsize - strokewidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (completion * circumference) / 100;
  const dashval = strokeval + ' ' + circumference;

  const trackstyle = { strokeWidth: strokewidth };
  const indicatorstyle = { strokeWidth: strokewidth, strokeDasharray: dashval };
  const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')';

  return (
    <div style={{ position: 'relative' }}>
      <svg width={size} height={size} className={classnames('donutchart', variablesClassName)}>
        <circle
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={trackstyle}
          className={styles['donutchart-full-circle']}
        />
        <circle
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={indicatorstyle}
          className={styles['donutchart-indicator']}
        />
        <text className={styles['donutchart-text']} x={halfsize} y={halfsize} />
      </svg>
      <span className={styles['donutchart-text']}>
        <span className={styles['donutchart-text-val']}>{completion}</span>
        {message && (
          <span className={styles['donutchart-text-label']}>
            {iconForMessage} {message}
          </span>
        )}
      </span>
    </div>
  );
};

export default DonutChart;
