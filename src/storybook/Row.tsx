import React from 'react';
import styles from './Row.module.sass';

const Row: React.FC = props => <div className={styles.row}>{props.children}</div>;

export default Row;
