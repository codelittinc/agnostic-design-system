import React from 'react';
import { Meta } from '@storybook/react';
import DualActionButton from '@/components/DualActionButton';
import styles from './DualActionButton.stories.css';
import mdx from './DualActionButton.stories.mdx';

export default {
  title: 'Components/Buttons/DualActionButton',
  component: DualActionButton,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => <DualActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'DualActionButton',
  backButtonAction: () => {},
  forwardButtonAction: () => {}
};

export const CustomStyledDualActionButton = () => {
  return (
    <DualActionButton
      text='Custom Styled DualActionButton'
      backButtonAction={() => {}}
      forwardButtonAction={() => {}}
      variablesClassName={styles.wrapper}
    />
  );
};
