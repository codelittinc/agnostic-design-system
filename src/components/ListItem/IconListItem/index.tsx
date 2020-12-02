import React from 'react';
import DefaultListItem, { Props } from '@/components/ListItem/DefaultListItem'; // eslint-disable-line no-unused-vars

import IconGear from '@/assets/images/icons/web/gear.svg';

const IconListItem = <T extends {}>(props: Props<T>) => {
  const sizeIcon = props.size === 'large' ? 20 : 13;

  return (
    <DefaultListItem
      {...props}
      getIcon={
        props.getIcon || (() => <IconGear width={sizeIcon} heigth={sizeIcon} title='Gear Icon' />)
      }
    />
  );
};

export default IconListItem;
