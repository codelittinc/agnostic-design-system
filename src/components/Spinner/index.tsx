import React from 'react';
import styles from '@/components/Spinner/Spinner.css';
import classnames from 'classnames';

interface Props {
  variablesClassName?: string;
}

const NUM_SEGMENTS = 8;

const SpinnerLoader: React.FC<Props> = props => {
  const { variablesClassName } = props;
  return (
    <div className={classnames(styles['lds-spinner-background'], variablesClassName)}>
      <div className={classnames(styles['lds-spinner'])}>
        {Array.from(Array(NUM_SEGMENTS).keys()).map(key => (
          <div className={styles['lds-spinner-segment']} key={key} />
        ))}
      </div>
    </div>
  );
};

export default SpinnerLoader;
