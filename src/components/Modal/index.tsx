import React from 'react';
import classNames from 'classnames';
import styles from '@/components/Modal/Modal.css';

interface Props {
  open: boolean;
  onClickOutside?: () => void;
  variablesClassName?: string;
}

const Modal: React.FC<Props> = props => {
  const { variablesClassName, open, onClickOutside, children } = props;

  function handleClickOutside(event) {
    if (event.target.id === 'modal-container' && onClickOutside) {
      onClickOutside();
    }
  }

  document.addEventListener('mousedown', handleClickOutside);

  return open ? (
    <div className={classNames(styles.wrapper, variablesClassName)}>
      <div className={classNames(styles.container)} id='modal-container'>
        <div className={classNames(styles['content-container'])}>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
