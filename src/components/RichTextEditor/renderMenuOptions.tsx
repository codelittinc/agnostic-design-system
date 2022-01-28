import React from 'react';
import classNames from 'classnames';
import styles from './RichTextEditor.css';
import buttonNameFormatter from './buttonNameFormatter';
import Button from '@/components/Button';

export default function renderMenuOptions(
  buttonIcons,
  getButtonIcon,
  editor,
  variablesClassName,
  menuEditOptions,
  methodTypeOptions,
  headerTypeOptions
) {
  return (
    <>
      {menuEditOptions?.map(buttonName => {
        if (methodTypeOptions.includes(buttonName) || buttonName === 'table') {
          return;
        }
        let onClickAction = () => {
          editor.chain().focus()[`toggle${buttonNameFormatter(buttonName)}`]().run();
        };

        let className = editor.isActive(buttonName) ? styles['is-active'] : '';

        if (headerTypeOptions.includes(buttonName)) {
          onClickAction = () => {
            editor
              .chain()
              .focus()
              .toggleHeading({ level: parseInt(buttonName.split('').at(-1)) })
              .run();
          };
          className = editor.isActive('heading', { level: parseInt(buttonName.split('').at(-1)) })
            ? styles['is-active']
            : '';
        }

        return (
          <Button
            appendIcon={getButtonIcon(buttonIcons, buttonName) ?? ''}
            text={getButtonIcon(buttonIcons, buttonName) ? '' : buttonName}
            category='neutral'
            key={buttonName}
            onClick={() => onClickAction()}
            variablesClassName={classNames(className, variablesClassName)}
            withAppendIcon={!!getButtonIcon(buttonIcons, buttonName)}
          />
        );
      })}
    </>
  );
}
