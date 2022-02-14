import classNames from 'classnames';
import React, { useLayoutEffect, useState } from 'react';
import styles from './SectionSelector.css';

export type Section = {
  id: string;
  text: string;
};

type SectionSelectorProps = {
  sections: Section[];
  onClick?: () => void;
};

const SectionSelector: React.FC<SectionSelectorProps> = ({ sections, onClick }) => {
  const [activeSection, setActiveSection] = useState('');
  const [activeSectionId, setActiveSectionId] = useState('');

  const scrollToSection = (activeSection?: string) => {
    if (activeSection !== undefined) {
      return document
        ?.querySelector(`[id='${activeSection}']`)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useLayoutEffect(() => {
    if (activeSection) {
      scrollToSection(activeSection);
      setActiveSection('');
    }
  }, [activeSection]);

  const onClickHandler = id => {
    setActiveSection(id);
    setActiveSectionId(id);
    return onClick?.();
  };

  return (
    <div className={styles.container}>
      {sections.map(p => {
        return (
          <div
            key={p.id}
            className={classNames(styles.button, {
              [styles.active]: p.id === activeSectionId
            })}
            onClick={() => onClickHandler(p.id)}
          >
            <span className={styles.text}>{p.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SectionSelector;
