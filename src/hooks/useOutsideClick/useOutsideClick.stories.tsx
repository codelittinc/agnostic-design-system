import React, { useState, useRef, useEffect } from 'react';
import Dropdown from '@/components/Dropdown';
import Toast from '@/components/Toast';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { Meta } from '@storybook/react';
import styles from './useOutsideClick.stories.css';
import mdx from './useOutsideClick.stories.mdx';

const Demo = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [wasClicked, setWasClicked] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => setWasClicked(true));

  const options = [
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setWasClicked(false), 1000);

    if (wasClicked) {
      /* eslint-disable no-unused-expressions */
      timer;
    }

    return () => {
      clearTimeout(timer);
    };
  }, [wasClicked]);

  const onChange = item => {
    setSelectedItem(item);
  };

  return (
    <div className={styles['dropdown-wrapper']}>
      {wasClicked && (
        <Toast
          autoCloseInMilliseconds={1000}
          category='success'
          message='You clicked outside the Dropdown!'
          title='Success'
          variablesClassName={styles['example-toast']}
        />
      )}

      <h4>Click outside of the Dropdown</h4>
      <div ref={ref}>
        <Dropdown
          onChange={item => onChange(item)}
          options={options}
          getItemLabel={item => item.label}
          getItemKey={item => item.value}
          getItemValue={item => item.value}
          getListTitle={item => item.label}
          selectorText='Select'
          value={selectedItem}
        />
      </div>
    </div>
  );
};

export default {
  title: 'Hooks/useOutsideClick',
  component: Demo,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = () => <Demo />;
export const Default = Template.bind({});
