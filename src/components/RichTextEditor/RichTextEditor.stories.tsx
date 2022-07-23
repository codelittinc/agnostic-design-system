import React from 'react';
import { Meta } from '@storybook/react';
import RichTextEditor from '@/components/RichTextEditor';
import mdx from './RichTextEditor.stories.mdx';
import SearchIcon from '../../assets/images/icons/web/search-simple.svg';
import ArrowUp from '../../assets/images/icons/web/gear.svg';

export default {
  title: 'Components/Form/RichTextEditor',
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
    'underline',
    'clear marks',
    'clear nodes',
    'undo',
    'redo',
    'image',
    'table'
  ]
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  menuEditOptions: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  placeholderText: 'Edit here'
};

export const WithEditorContent = Template.bind({});
WithEditorContent.args = {
  menuEditOptions: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  editorContent: 'Edit here'
};

export const WithMenuPositionedBotton = Template.bind({});
WithMenuPositionedBotton.args = {
  menuEditOptions: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  menuPositionedBottom: true
};

export const WithButtonIcons = Template.bind({});
WithButtonIcons.args = {
  menuEditOptions: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  buttonIcons: [
    { buttonName: 'h2', icon: <SearchIcon height='15' width='15' /> },
    { buttonName: 'h5', icon: <ArrowUp height='15' width='15' /> }
  ]
};

export const WithDisplayOnlyOnFocus = Template.bind({});
WithDisplayOnlyOnFocus.args = {
  menuEditOptions: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  displayOnlyOnFocus: true
};
