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
  buttonIcons?: Array<object>;
  editor: any;
  menuEditOptions?: typeof MENU_EDIT_OPTIONS;
  ref?: React.Ref<HTMLDivElement>;
  variablesClassName?: string;
}

const MenuBar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { buttonIcons, editor, menuEditOptions, variablesClassName } = props;

  if (!editor) {
    return null;
  }
  function addImage() {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }

  const getButtonIcon = (obj, name) => {
    if (obj) {
      const iconObject = obj.find(element => {
        return element.buttonName === name;
      });
      return iconObject?.icon;
    }
  };

  return (
    <div className={classNames(styles['menu-bar-container'], variablesClassName)} ref={ref}>
      {renderMenuOptions(
        buttonIcons,
        getButtonIcon,
        editor,
        variablesClassName,
        menuEditOptions,
        METHOD_TYPE_OPTIONS,
        HEADER_TYPE_OPTIONS
      )}
      {!!menuEditOptions?.includes('image') && (
        <Button
          appendIcon={getButtonIcon(buttonIcons, 'image') ?? ''}
          text={getButtonIcon(buttonIcons, 'image') ? '' : 'image'}
          category='neutral'
          key='image'
          onClick={() => addImage()}
          variablesClassName={classNames(variablesClassName)}
          withAppendIcon={!!getButtonIcon(buttonIcons, 'image')}
        />
      )}
      {!!menuEditOptions?.includes('horizontal rule') && (
        <Button
          appendIcon={getButtonIcon(buttonIcons, 'horizontal rule') ?? ''}
          text={getButtonIcon(buttonIcons, 'horizontal rule') ? '' : 'horizontal rule'}
          category='neutral'
          key='horizontal rule'
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          variablesClassName={classNames(variablesClassName)}
          withAppendIcon={!!getButtonIcon(buttonIcons, 'horizontal rule')}
        />
      )}
      {!!menuEditOptions?.includes('hard break') && (
        <Button
          appendIcon={getButtonIcon(buttonIcons, 'hard break') ?? ''}
          text={getButtonIcon(buttonIcons, 'hard break') ? '' : 'hard break'}
          category='neutral'
          key='hard break'
          onClick={() => editor.chain().focus().setHardBreak().run()}
          variablesClassName={classNames(variablesClassName)}
          withAppendIcon={!!getButtonIcon(buttonIcons, 'hard break')}
        />
      )}
      {!!menuEditOptions?.includes('clear marks') && (
        <Button
          appendIcon={getButtonIcon(buttonIcons, 'clear marks') ?? ''}
          text={getButtonIcon(buttonIcons, 'clear marks') ? '' : 'clear marks'}
          category='neutral'
          key='clear marks'
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          variablesClassName={classNames(variablesClassName)}
          withAppendIcon={!!getButtonIcon(buttonIcons, 'clear marks')}
        />
      )}
      {!!menuEditOptions?.includes('clear nodes') && (
        <Button
          appendIcon={getButtonIcon(buttonIcons, 'clear nodes') ?? ''}
          text={getButtonIcon(buttonIcons, 'clear nodes') ? '' : 'clear nodes'}
          category='neutral'
          key='clear nodes'
          onClick={() => editor.chain().focus().clearNodes().run()}
          variablesClassName={classNames(variablesClassName)}
          withAppendIcon={!!getButtonIcon(buttonIcons, 'clear nodes')}
        />
      )}
      {!!menuEditOptions?.includes('table') &&
        renderTableOptions(buttonIcons, getButtonIcon, editor, variablesClassName, TABLE_OPTIONS)}
      {!!menuEditOptions?.includes('undo') && (
        <Button
          appendIcon={getButtonIcon(buttonIcons, 'undo') ?? ''}
          text={getButtonIcon(buttonIcons, 'undo') ? '' : 'undo'}
          category='neutral'
          key='undo'
          onClick={() => editor.chain().focus().undo().run()}
          variablesClassName={classNames(variablesClassName)}
          withAppendIcon={!!getButtonIcon(buttonIcons, 'undo')}
        />
      )}
      {!!menuEditOptions?.includes('redo') && (
        <Button
          appendIcon={getButtonIcon(buttonIcons, 'redo') ?? ''}
          text={getButtonIcon(buttonIcons, 'redo') ? '' : 'redo'}
          category='neutral'
          key='redo'
          onClick={() => editor.chain().focus().redo().run()}
          variablesClassName={classNames(variablesClassName)}
          withAppendIcon={!!getButtonIcon(buttonIcons, 'redo')}
        />
      )}
    </div>
  );
});

export default MenuBar;
