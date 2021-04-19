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
    listItemCategory,
    showSelectAll,
    sort
  } = props;
  const listRef = useRef<HTMLDivElement>(null);
  const customSort = sort;

  const getOptions = () => {
    return customSort ? options.sort(customSort) : options;
  };

  const getSelectOptions = select => {
    return select ? options : [];
  };

  const selectAllContainer = () => {
    return (
      multiselect &&
      showSelectAll && (
        <div className={styles['select-all-container']}>
          <a className={styles['select-all-link']} onClick={() => onChange(getSelectOptions(true))}>
            Select All
          </a>{' '}
          -{' '}
          <a
            className={styles['select-all-link']}
            onClick={() => onChange(getSelectOptions(false))}
          >
            Deselect All
          </a>
        </div>
      )
    );
  };

  return (
    <List<T>
      ref={ref || listRef}
      size={size}
      options={getOptions()}
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
      appendList={selectAllContainer()}
    />
  );
};

const Wrapper = React.forwardRef(RenderOptions) as <T extends {}>(
  p: DropdownProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;

export default Wrapper;
