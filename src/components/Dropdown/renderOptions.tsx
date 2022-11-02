import React, { useRef } from 'react';
import styles from '@/components/Dropdown/Dropdown.css';
import { Props as DropdownProps } from '@/components/Dropdown'; // eslint-disable-line no-unused-vars
import List from '@/components/List';
import classnames from 'classnames';
import { groupBy as groupByLodash } from 'lodash';
import CollapsibleGroup from './collapsibleGroup';

const RenderOptions = <T extends {}>(props: DropdownProps<T>, ref?: React.Ref<HTMLDivElement>) => {
  const {
    collapsibleGroups,
    collapsibleGroupsButtonItems,
    disabledOptionsList,
    hideGroupByTitle,
    value,
    size,
    getItemKey,
    getItemLabel,
    getItemValue,
    id,
    onChange,
    options,
    multiselect,
    nodeAfterItems,
    nodeBeforeItems,
    variablesClassName,
    listItemCategory,
    listPosition,
    showSelectAll,
    sort,
    groupBy
  } = props;

  const listRef = useRef<HTMLDivElement>(null);
  const customSort = sort;

  const getNodeBeforeItems = appendNode => {
    return (
      <>
        {nodeBeforeItems && nodeBeforeItems}
        {appendNode && appendNode}
      </>
    );
  };

  const getOptions = () => {
    return customSort ? options.sort(customSort) : options;
  };

  const getSelectOptions = select => {
    return select ? options : [];
  };

  const handleGroupBy = () => {
    return groupByLodash(getOptions(), groupBy);
  };

  const selectAllContainer = () => {
    return multiselect && showSelectAll ? (
      <div className={styles['select-all-container']}>
        <a className={styles['select-all-link']} onClick={() => onChange(getSelectOptions(true))}>
          Select All
        </a>
        <a className={styles['select-all-link']} onClick={() => onChange(getSelectOptions(false))}>
          Deselect All
        </a>
      </div>
    ) : (
      ''
    );
  };

  const ListWithoutGroupBy = () => {
    return (
      <List<T>
        disabledOptionsList={disabledOptionsList}
        ref={ref || listRef}
        size={size}
        options={getOptions()}
        onChange={onChange}
        getItemKey={item => getItemKey(item)}
        getItemLabel={item => getItemLabel(item)}
        getItemValue={item => getItemValue(item)}
        variablesClassName={classnames(
          styles['dropdown-list'],
          variablesClassName,
          listPosition === 'top'
            ? styles['dropdown-list-positioned-top']
            : styles['dropdown-list-positioned-bottom']
        )}
        listItemCategory={listItemCategory}
        selected={value}
        multiselect={multiselect}
        id={`${id}-list`}
        nodeAfterItems={nodeAfterItems}
        nodeBeforeItems={getNodeBeforeItems(selectAllContainer())}
      />
    );
  };

  const ListWithGroupBy = () => {
    const groupedOptions = handleGroupBy();
    const keys = Object.keys(groupedOptions);

    const buildAppendList = (item, index) => {
      return (
        <>
          {index === 0 && selectAllContainer()}
          <span className={styles['group-title']}>{item}</span>
        </>
      );
    };

    const buildGroupedList = (item, index) => {
      return (
        <List<T>
          disabledOptionsList={disabledOptionsList}
          getItemKey={item => getItemKey(item)}
          getItemLabel={item => getItemLabel(item)}
          getItemValue={item => getItemValue(item)}
          id={`${id}-list`}
          listItemCategory={listItemCategory}
          multiselect={multiselect}
          nodeBeforeItems={!hideGroupByTitle && buildAppendList(item, index)}
          onChange={onChange}
          options={groupedOptions[item]}
          selected={value}
          size={size}
          variablesClassName={classnames(
            styles['dropdown-list'],
            styles['dropdown-list-group'],
            variablesClassName
          )}
        />
      );
    };

    const renderList = keys => {
      return (
        keys.length > 0 &&
        keys.map((item: string, index: number) => {
          return collapsibleGroups ? (
            <CollapsibleGroup
              buttonContent={
                collapsibleGroupsButtonItems ? (
                  <div className={styles['collapsible-button-icon-wrapper']}>
                    {collapsibleGroupsButtonItems[index]}
                    {item}
                  </div>
                ) : (
                  item
                )
              }
              key={`list-groupby-${item + Math.random()}`}
              size={size}
            >
              {buildGroupedList(item, index)}
            </CollapsibleGroup>
          ) : (
            <React.Fragment key={`list-groupby-${item + Math.random()}`}>
              {buildGroupedList(item, index)}
            </React.Fragment>
          );
        })
      );
    };

    return (
      <div className={styles['dropdown-list-group-container']} ref={ref || listRef}>
        {nodeBeforeItems}
        <div className={styles['dropdown-list-groups-wrapper']}>
          {keys.length > 0 && <>{renderList(keys)}</>}
        </div>
        {nodeAfterItems}
      </div>
    );
  };

  return groupBy ? ListWithGroupBy() : ListWithoutGroupBy();
};

const Wrapper = React.forwardRef(RenderOptions) as <T extends {}>(
  p: DropdownProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement;

export default Wrapper;
