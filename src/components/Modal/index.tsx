import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from '@/components/Modal/Modal.css';

interface Props {
  onClickOutside?: () => void;
  open: boolean;
  position?: 'center' | 'right' | 'left';
  variablesClassName?: string;
}

const Modal: React.FC<Props> = props => {
  const { children, onClickOutside, open, position, variablesClassName } = props;
  const positionStyling = styles[`modal-position-${position}`];

  useEffect(() => {
    const handleClickOutside = event => {
      if (event.target.id === 'modal-container' && onClickOutside) {
        onClickOutside();
      }
    };

    open && document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClickOutside]);

  return open ? (
    <div className={classNames(styles.wrapper, variablesClassName)}>
      <div className={classNames(styles.container)} id='modal-container'>
        <div className={classNames(styles['content-container'], positionStyling)}>{children}</div>
      </div>
    </div>
  ) : null;
};

Modal.defaultProps = {
  position: 'center'
};

export default Modal;
