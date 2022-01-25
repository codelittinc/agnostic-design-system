import React from 'react';
import { Meta } from '@storybook/react';
import RichTextEditor from '@/components/RichTextEditor';
import mdx from './RichTextEditor.stories.mdx';

export default {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

const Template = args => {
  return <RichTextEditor {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  menuEditOptions: [
    'blockquote',
    'bullet list',
    'code block',
    'hard break',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'horizontal rule',
    'ordered list',
    'bold',
    'code',
    'italic',
    'strike',
    'clear marks',
    'clear nodes',
    'undo',
    'redo',
    'image',
    'table'
  ],
  editorContent: '<h2>Edit here</h2><br><br>',
  menuPositionedBottom: true
};
