import React from 'react';
import { Meta } from '@storybook/react';
import Spinner from '@/components/Spinner';
import styles from './SpinnerStories.css';
import mdx from './Spinner.stories.mdx';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  return <Spinner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  variablesClassName: styles['default-lds-spinner']
};

export const WithDefinedBackground = Template.bind({});
WithDefinedBackground.args = {
  variablesClassName: styles['defined-background-lds-spinner']
};

export const WithFullScreenBackground = Template.bind({});
WithFullScreenBackground.args = {
  variablesClassName: styles['fullscreen-background-lds-spinner']
};
