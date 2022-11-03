import React, { useState } from 'react';
import RangeSlider from '@/components/RangeSlider';
import styles from './RangeSlider.stories.css';
import { Meta } from '@storybook/react';
import mdx from './RangeSlider.stories.mdx';

export default {
  title: 'Components/Forms/Range Slider',
  component: RangeSlider,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  const [value, setValue] = useState(0);

  return <RangeSlider {...args} value={value} onChange={e => setValue(e)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default range slider'
};

export const WithMarks = Template.bind({});
WithMarks.args = {
  label: 'Range slider with marks',
  min: 0,
  max: 60000,
  marks: {
    0: (
      <div className={styles['range-marker-container']}>
        <div className={`${styles['range-marker']} ${styles['range-marker-highlight']}`} />
        <p>0</p>
      </div>
    ),
    15000: (
      <div className={styles['range-marker-container']}>
        <div className={`${styles['range-marker']} ${styles['range-marker-highlight']}`} />
        <p>$ 15,000</p>
      </div>
    ),
    30000: (
      <div className={styles['range-marker-container']}>
        <div className={`${styles['range-marker']} ${styles['range-marker-highlight']}`} />
        <p>$ 30,000</p>
      </div>
    ),
    45000: (
      <div className={styles['range-marker-container']}>
        <div className={`${styles['range-marker']} ${styles['range-marker-highlight']}`} />
        <p>$ 45,000</p>
      </div>
    ),
    60000: (
      <div className={styles['range-marker-container']}>
        <div className={`${styles['range-marker']} ${styles['range-marker-highlight']}`} />
        <p>$ 60,000</p>
      </div>
    )
  }
};
