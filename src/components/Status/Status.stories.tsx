import React from 'react';
import Status from '@/components/Status';
import { Meta } from '@storybook/react';
import mdx from './Status.stories.mdx';
import styles from './Status.stories.css';

export default {
  title: 'Components/Label/Status',
  component: Status,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  return <Status {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  leftIcon: true,
  text: 'Hello World'
};

export const CustomStatus = () => {
  return (
    <Status
      leftIcon
      text={<span>SPAN HTML element text</span>}
      variablesClassName={styles['custom-styling']}
    />
  );
};
