import React from 'react';
import DonutChart from '@/components/DonutChart';
import { Meta } from '@storybook/react';
import mdx from './DonutChart.stories.mdx';
import classNames from 'classnames';

import styles from './DonutChartTest.css';

export default {
  title: 'Components/Charts/DonutChart',
  component: DonutChart,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  return <DonutChart {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  completion: 44,
  message: 'No Risk',
  iconForMessage: <span> &#8861; </span>,
  size: 180,
  strokewidth: 10
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  completion: 55,
  message: 'Completed',
  size: 200,
  strokewidth: 15,
  variablesClassName: classNames(styles['custom-donut-chart'])
};
