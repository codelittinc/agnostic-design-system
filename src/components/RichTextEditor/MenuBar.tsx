import React from 'react';
import styles from './RichTextEditor.css';
import Button from '@/components/Button';
import classNames from 'classnames';
import renderMenuOptions from './renderMenuOptions';
import renderTableOptions from './renderTableOptions';
import {
  METHOD_TYPE_OPTIONS,
  HEADER_TYPE_OPTIONS,
  TABLE_OPTIONS,
  MENU_EDIT_OPTIONS
} from './richTextEditOptions';

interface Props {
  editor: any;
  menuEditOptions?: typeof MENU_EDIT_OPTIONS;
  ref?: React.Ref<HTMLDivElement>;
  variablesClassName?: string;
}

const MenuBar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { editor, menuEditOptions, variablesClassName } = props;

  if (!editor) {
    return null;
  }
  function addImage() {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }

  return (
    <div className={classNames(styles['menu-bar-container'], variablesClassName)} ref={ref}>
      {renderMenuOptions(
        editor,
        variablesClassName,
        menuEditOptions,
        METHOD_TYPE_OPTIONS,
        HEADER_TYPE_OPTIONS
      )}
      {!!menuEditOptions?.includes('image') && (
        <Button
          text='image'
          category='neutral'
          key='image'
          onClick={() => addImage()}
          variablesClassName={classNames(variablesClassName)}
        />
      )}
      {!!menuEditOptions?.includes('horizontal rule') && (
        <Button
          text='horizontal rule'
          category='neutral'
          key='horizontal rule'
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          variablesClassName={classNames(variablesClassName)}
        />
      )}
      {!!menuEditOptions?.includes('hard break') && (
        <Button
          text='hard break'
          category='neutral'
          key='hard break'
          onClick={() => editor.chain().focus().setHardBreak().run()}
          variablesClassName={classNames(variablesClassName)}
        />
      )}
      {!!menuEditOptions?.includes('clear marks') && (
        <Button
          text='clear marks'
          category='neutral'
          key='clear marks'
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          variablesClassName={classNames(variablesClassName)}
        />
      )}
      {!!menuEditOptions?.includes('clear nodes') && (
        <Button
          text='clear nodes'
          category='neutral'
          key='clear nodes'
          onClick={() => editor.chain().focus().clearNodes().run()}
          variablesClassName={classNames(variablesClassName)}
        />
      )}
      {!!menuEditOptions?.includes('table') &&
        renderTableOptions(editor, variablesClassName, TABLE_OPTIONS)}
      {!!menuEditOptions?.includes('undo') && (
        <Button
          text='undo'
          category='neutral'
          key='undo'
          onClick={() => editor.chain().focus().undo().run()}
          variablesClassName={classNames(variablesClassName)}
        />
      )}
      {!!menuEditOptions?.includes('redo') && (
        <Button
          text='redo'
          category='neutral'
          key='redo'
          onClick={() => editor.chain().focus().redo().run()}
          variablesClassName={classNames(variablesClassName)}
        />
      )}
    </div>
  );
});

export default MenuBar;
