import React from 'react';
import { Meta } from '@storybook/react';
import SectionSelector from '@/components/SectionSelector';
import mdx from './SectionSelector.stories.mdx';
import classNames from 'classnames';
import styles from './SectionSelector.stories.css';

export default {
  title: 'Components/Forms/Section Selector',
  component: SectionSelector,
  parameters: {
    docs: {
      section: mdx
    }
  }
} as Meta;

const Template = args => {
  return <SectionSelector {...args} />;
};

const PracticalTemplate = args => {
  return (
    <div className={classNames(styles.container)}>
      <div>
        <SectionSelector {...args} />
      </div>
      <div className={classNames(styles['sections-container'])}>
        <div id='section-1' className={classNames(styles.section)}>
          <h1>Section 1</h1>
        </div>
        <div id='section-2' className={classNames(styles.section)}>
          <h1>Section 2</h1>
        </div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  sections: [
    { text: 'Section 1', id: 'section-1' },
    { text: 'Section 2', id: 'section-2' }
  ]
};

export const PracticalExample = PracticalTemplate.bind({});
PracticalExample.args = {
  sections: [
    { text: 'Section 1', id: 'section-1' },
    { text: 'Section 2', id: 'section-2' }
  ]
};
