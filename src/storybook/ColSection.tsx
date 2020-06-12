import React from 'react';
import styles from './ColSection.module.sass';

interface Props {
  name: string;
}

const ColSection: React.FC<Props> = props => (
  <div className={styles.container}>
    <h1 className={styles.name}>{props.name}</h1>
    <div className={styles.content}>{props.children}</div>
  </div>
);

export default ColSection;
