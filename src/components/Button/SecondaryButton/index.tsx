import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/SecondaryButton/SecondaryButton.css';
import classNames from 'classnames';

interface Props {
  onClick?: () => void;
}

const SecondaryButton: React.FC<Props> = props => (
  <DefaultButton {...props} className={classNames(styles.button, styles['button--secondary'])} />
);

export default SecondaryButton;
