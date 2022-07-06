import React from 'react';
import DonutChart from '@/components/DonutChart';
import { Meta } from '@storybook/react';
import mdx from './DonutChart.stories.mdx';
import styles from './DonutChartTest.css';

export default {
  title: 'Components/DonutChart',
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

export const WithMessageAsElement = Template.bind({});
WithMessageAsElement.args = {
  completion: 55,
  message: <div>HTML Element Message</div>,
  renderCompletionText: false,
  size: 200,
  strokewidth: 25
};

export const WithHoverTooltip = Template.bind({});
WithHoverTooltip.args = {
  completion: 55,
  enableTooltip: true,
  fullCircleTooltip: 'First Tooltip',
  indicatorTooltip: 'SecondTooltip',
  message: 'Completed',
  renderCompletionValue: false,
  size: 200,
  strokewidth: 25,
}

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  completion: 55,
  message: 'Completed',
  renderCompletionValue: false,
  size: 200,
  strokewidth: 25,
  variablesClassName: styles['custom-donut-chart']
};
