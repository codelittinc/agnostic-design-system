import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/NegativeButton/NegativeButton.css';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
}

const NegativeButton: React.FC<Props> = props => (
  <DefaultButton {...props} className={classNames(styles.button, styles['button--negative'])} />
);

export default NegativeButton;
