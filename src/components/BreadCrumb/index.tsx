import React from 'react';
import classnames from 'classnames';
import styles from '@/components/BreadCrumb/BreadCrumb.css';

type Item = {
  title: string;
  link: string;
};

interface Props {
  items: Item[];
  separator?: string;
  variablesClassName?: string;
}

const BreadCrumb: React.FC<Props> = props => {
  const { items, separator, variablesClassName } = props;

  return (
    <div className={classnames(variablesClassName, styles.breadcrumb)}>
      {items.map((item, key) => {
        return (
          <div key={key} className={styles['breadcrumb-list-item']}>
            <span className={styles['breadcrumb-separator']}>{separator}</span>
            <a href={item.link} className={styles['breadcrumb-link']}>
              {item.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
