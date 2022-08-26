import React, { useState } from 'react';
import getArrowIcon from './getArrowIcon';
import Button, { Size } from '@/components/Button'; // eslint-disable-line no-unused-vars
import styles from './Dropdown.css';

type Props = {
  buttonText: string;
  size: Size;
};

const CollapsibleGroup: React.FC<Props> = ({ buttonText, children, size }) => {
  const [showChildren, setShowChildren] = useState(true);

  return (
    <div className={styles['collapsible-group-wrapper']}>
      <Button
        appendIcon={getArrowIcon(!showChildren, 'top', size)}
        onClick={() => setShowChildren(!showChildren)}
        text={buttonText}
        withAppendIcon
        variablesClassName={styles['collapsible-group-button']}
      />

      {showChildren && children}
    </div>
  );
};

export default CollapsibleGroup;
