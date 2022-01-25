import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import styles from './RichTextEditor.css';
import classNames from 'classnames';
import MenuBar from './MenuBar';
import { MENU_EDIT_OPTIONS } from './richTextEditOptions';

interface Props {
  editorContent?: string;
  menuEditOptions?: typeof MENU_EDIT_OPTIONS;
  menuPositionedBottom?: boolean;
  variablesClassName?: string;
}

const RichTextEditor: React.FC<Props> = props => {
  const { editorContent, menuEditOptions, menuPositionedBottom, variablesClassName } = props;

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: classNames(styles['editor-container'], variablesClassName)
      }
    },
    extensions: [
      StarterKit,
      Image,
      Table.configure({
        resizable: true
      }),
      TableRow,
      TableHeader,
      TableCell
    ],
    content: editorContent || ''
  });

  const menuBarPosition = menuPositionedBottom ? styles['menu-bar-bottom-positioned'] : '';

  return (
    <div className={classNames(variablesClassName, menuBarPosition)}>
      <MenuBar
        editor={editor}
        menuEditOptions={menuEditOptions}
        variablesClassName={variablesClassName}
      />
      <EditorContent editor={editor} />
    </div>
  );
};

RichTextEditor.defaultProps = {
  menuEditOptions: MENU_EDIT_OPTIONS
};

export default RichTextEditor;
