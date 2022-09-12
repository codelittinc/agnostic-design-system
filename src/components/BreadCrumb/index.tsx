import React from 'react';
import classnames from 'classnames';
import styles from '@/components/BreadCrumb/BreadCrumb.css';

type Item = {
  title?: string;
  link?: string;
  customLink?: React.ReactNode;
};

interface Props {
  items: Item[];
  separator?: string | React.ReactNode;
  variablesClassName?: string;
}

const BreadCrumb: React.FC<Props> = props => {
  const { items, separator, variablesClassName } = props;

  const getLink = ({ title, link, customLink }: Item) => {
    if (customLink) return customLink;
    return (
      <a href={link} className={styles['breadcrumb-link']}>
        {title}
      </a>
    );
  };

  return (
    <div className={classnames(variablesClassName, styles.breadcrumb)}>
      {items.map((item, key) => {
        return (
          <div key={key} className={styles['breadcrumb-list-item']}>
            <span className={styles['breadcrumb-separator']}>{separator}</span>
            {getLink(item)}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
