import React, { useRef, useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import styles from './RichTextEditor.css';
import classNames from 'classnames';
import MenuBar from './MenuBar';
import { MENU_EDIT_OPTIONS } from './richTextEditOptions';
import clsx from 'clsx';

interface Props {
  buttonIcons?: Array<object>;
  disableImageValue?: boolean;
  displayOnlyOnFocus?: boolean;
  editorContent?: string;
  menuEditOptions?: typeof MENU_EDIT_OPTIONS;
  menuPositionedBottom?: boolean;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onCreate: React.Dispatch<React.SetStateAction<object>>;
  placeholderText?: string;
  variablesClassName?: string;
}

const RichTextEditor: React.FC<Props> = props => {
  const {
    buttonIcons,
    displayOnlyOnFocus,
    disableImageValue,
    editorContent,
    menuEditOptions,
    menuPositionedBottom,
    onChange,
    onCreate,
    placeholderText,
    variablesClassName
  } = props;

  const [hideMenuBar, setHideMenuBar] = useState(displayOnlyOnFocus);

  const menuBarClassName = clsx(
    variablesClassName,
    hideMenuBar ? styles['menu-bar-container-hidden'] : styles['menu-bar-container-visible']
  );

  const buttonsMenuElement = useRef<HTMLDivElement>(null);
  const textAreaElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function buttonsMenuConcealer(event) {
      if (
        textAreaElement.current &&
        buttonsMenuElement.current &&
        !textAreaElement.current.contains(event.target) &&
        !buttonsMenuElement.current.contains(event.target)
      ) {
        setHideMenuBar(true);
      }
    }

    if (displayOnlyOnFocus) {
      document.addEventListener('mousedown', buttonsMenuConcealer);
    }

    return () => {
      document.removeEventListener('mousedown', buttonsMenuConcealer);
    };
  }, [displayOnlyOnFocus]);

  const buttonsMenuDisplayer = () => {
    displayOnlyOnFocus && setHideMenuBar(false);
  };

  const menuBarPosition = menuPositionedBottom ? styles['menu-bar-bottom-positioned'] : '';

  const extensions: any = [
    StarterKit,
    !disableImageValue && Image,
    Table.configure({
      resizable: true
    }),
    TableRow,
    TableHeader,
    Underline,
    TableCell,
    Placeholder.configure({
      placeholder: placeholderText,
      emptyEditorClass: styles['is-editor-empty']
    })
  ];

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: classNames(styles['editor-container'], variablesClassName)
      }
    },
    extensions,
    content: editorContent,
    onUpdate({ editor }) {
      onChange && onChange(editor.getHTML());
    },
    onCreate({ editor }) {
      onCreate && onCreate(editor);
    }
  });

  return (
    <div className={classNames(variablesClassName, menuBarPosition)}>
      <MenuBar
        buttonIcons={buttonIcons}
        editor={editor}
        menuEditOptions={menuEditOptions}
        ref={buttonsMenuElement}
        variablesClassName={menuBarClassName}
      />
      <div ref={textAreaElement}>
        <EditorContent editor={editor} onClick={() => buttonsMenuDisplayer()} />
      </div>
    </div>
  );
};

RichTextEditor.defaultProps = {
  menuEditOptions: MENU_EDIT_OPTIONS
};

export default RichTextEditor;
