import React from 'react';

import DefaultListItem, {
  Props as DefaultListItemProps // eslint-disable-line no-unused-vars
} from '@/components/ListItem/DefaultListItem';
import CheckBoxListItem from '@/components/ListItem/CheckBoxListItem';
import CheckMarkListItem from '@/components/ListItem/CheckMarkListItem';
import IconListItem from '@/components/ListItem/IconListItem';
import RadioListItem from '@/components/ListItem/RadioButtonListItem';

type Category = 'simple' | 'checkbox' | 'icon' | 'radio' | 'checkmark';

type Props<T> = DefaultListItemProps<T> & {
  category?: Category;
};

const items = {
  simple: DefaultListItem,
  checkbox: CheckBoxListItem,
  checkmark: CheckMarkListItem,
  icon: IconListItem,
  radio: RadioListItem
};

const ListItem = <T extends {}>(props: Props<T>) => {
  const ListItemType = items[props.category || 'simple'];

  return <ListItemType {...props} />;
};

export default ListItem;
