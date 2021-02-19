import React from 'react';
import DefaultButton from '@/components/Button/DefaultButton';
import styles from '@/components/Button/PositiveButton/PositiveButton.css';
import classNames from 'classnames';

interface Props {
  onClick: () => void;
}

const PositiveButton: React.FC<Props> = props => (
  <DefaultButton {...props} className={classNames(styles.button, styles['button--positive'])} />
);

export default PositiveButton;
