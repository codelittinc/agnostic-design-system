import React, { useRef } from 'react';
import styles from '@/components/Dropdown/Dropdown.css';
import { Props as DropdownProps } from '@/components/Dropdown'; // eslint-disable-line no-unused-vars
import List from '@/components/List';
import classnames from 'classnames';

const RenderOptions = <T extends {}>(props: DropdownProps<T>, ref?: React.Ref<HTMLDivElement>) => {
  const {
    selected,
    size,
    getItemKey,
    getItemLabel,
    getItemValue,
    getItemIcon,
    id,
    onChange,
    options,
    multiselect,
    variablesClassName,
    listItemCategory
  } = props;
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <List<T>
      ref={ref || listRef}
      size={size}
      options={options}
      onChange={onChange}
      getItemKey={item => getItemKey(item)}
      getItemLabel={item => getItemLabel(item)}
      getItemValue={item => getItemValue(item)}
      getItemIcon={item => getItemIcon && getItemIcon(item)}
      variablesClassName={classnames(styles['dropdown-list'], variablesClassName)}
      listItemCategory={listItemCategory}
      selected={selected}
      multiselect={multiselect}
      id={`${id}-list`}
    />
  );
};

const Wrapper = React.forwardRef(RenderOptions) as <T extends {}>(
  p: DropdownProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;

export default Wrapper;
