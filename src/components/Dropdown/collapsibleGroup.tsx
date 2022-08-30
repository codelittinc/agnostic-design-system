import React, { useState } from 'react';
import getArrowIcon from './getArrowIcon';
import Button, { Size } from '@/components/Button'; // eslint-disable-line no-unused-vars
import styles from './Dropdown.css';

type Props = {
  buttonContent: string | React.ReactNode;
  size: Size;
};

const CollapsibleGroup: React.FC<Props> = ({ buttonContent, children, size }) => {
  const [showChildren, setShowChildren] = useState(true);

  return (
    <div className={styles['collapsible-group-wrapper']}>
      <Button
        appendIcon={getArrowIcon(!showChildren, 'top', size)}
        onClick={() => setShowChildren(!showChildren)}
        text={buttonContent}
        withAppendIcon
        variablesClassName={styles['collapsible-group-button']}
      />

      {showChildren && children}
    </div>
  );
};

export default CollapsibleGroup;
