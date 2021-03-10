import React from 'react';
import { Meta } from '@storybook/react';
import UploadAvatar from '@/components/UploadAvatar';
import mdx from './UploadAvatar.stories.mdx';

export default {
  title: 'Components/UploadAvatar',
  component: UploadAvatar,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => <UploadAvatar {...args} />;

export const Default = Template.bind({});

export const CustomAvatarUpload = Template.bind({});
CustomAvatarUpload.args = {
  maxSize: 5,
  imageTypes: ['image/jpeg']
};
