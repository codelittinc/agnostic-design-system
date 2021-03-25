import React from 'react';
import IconArrowUp from '@/assets/images/icons/web/arrow-up.svg';
import IconArrowDown from '@/assets/images/icons/web/arrow-down.svg';
import styles from '@/components/Dropdown/Dropdown.css';
import { LARGE_SIZE } from '@/components/Dropdown';

export default (isOpen, size) => {
  const iconTitle = isOpen ? 'Hide Options' : 'Show Options';
  const IconType = isOpen ? IconArrowUp : IconArrowDown;
  const iconWidthSize = size === LARGE_SIZE ? 15 : 9;
  const iconHeightSize = size === LARGE_SIZE ? 9 : 5;

  return (
    <IconType
      className={styles['dropdown-append-icon']}
      width={iconWidthSize}
      height={iconHeightSize}
      title={iconTitle}
    />
  );
};
