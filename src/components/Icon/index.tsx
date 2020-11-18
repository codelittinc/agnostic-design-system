import React from 'react';
import ClassNames from 'classnames';
import styles from '@/components/Icon/Icon.css';

import IconSearch from '@/assets/images/icons/web/search-simple.svg';

type Category = 'search';

interface Props {
  description?: string;
  heigth?: string;
  name?: Category;
  title?: string;
  variablesClassName?: string;
  width?: string;
}

const icons = {
  search: IconSearch
};

const Icon: React.FC<Props> = props => {
  const { description, title, variablesClassName, ...iconProps } = props;
  const IconType = icons[props.name || ''];
  const descClass = 'offscreen-desc';
  const buttonClass = 'offscreen-button';

  return (
    <button className={ClassNames(variablesClassName, styles[buttonClass])}>
      <IconType {...iconProps} title={title} />
      <span className={ClassNames(styles[descClass])}>{description}</span>
    </button>
  );
};

export default Icon;
