import React from 'react';

import DefaultListItem, {
  Props as DefaultListItemProps // eslint-disable-line no-unused-vars
} from '@/components/ListItem/DefaultListItem';
import CheckBoxListItem from '@/components/ListItem/CheckBoxListItem';
import IconListItem from '@/components/ListItem/IconListItem';

type Category = 'simple' | 'checkbox' | 'icon';

type Props<T> = DefaultListItemProps<T> & {
  category?: Category;
};

const items = {
  simple: DefaultListItem,
  checkbox: CheckBoxListItem,
  icon: IconListItem
};

const ListItem = <T extends {}>(props: Props<T>) => {
  const ListItemType = items[props.category || 'simple'];

  return <ListItemType {...props} />;
};

export default ListItem;
