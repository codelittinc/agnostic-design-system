import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Tab.css';
import Button from '@/components/Button';

type MenuItem = {
  title: string | React.ReactNode;
  active?: boolean;
};

interface Props {
  components: React.ReactNode[];
  menuItems: MenuItem[];
  variablesClassName?: string;
}

const Tab = (props: Props) => {
  const { menuItems, components, variablesClassName } = props;

  const activeDefault = menuItems.find(item => item.active);
  const [activeButton, setActiveButton] = useState(activeDefault || menuItems[0]);

  if (menuItems.length !== components.length) {
    return <>It is necessary to provide the same amount of menu items and components.</>;
  }

  return (
    <div className={classNames(styles['tab-container'], variablesClassName)}>
      <div className={classNames(styles['tab-menu-container'], variablesClassName)}>
        {menuItems.map((item, index) => {
          return (
            <Button
              key={`${item.title}-${index}`}
              variablesClassName={classNames(
                styles['tab-menu-button'],
                activeButton === item && styles['tab-menu-button-active'],
                variablesClassName
              )}
              text={item.title}
              onClick={() => setActiveButton(item)}
            />
          );
        })}
      </div>
      <div>
        {components.map((component, index) => {
          return <div key={index}>{menuItems[index] === activeButton && component}</div>;
        })}
      </div>
    </div>
  );
};

export default Tab;
