import React from 'react';
import classNames from 'classnames';
import buttonNameFormatter from './buttonNameFormatter';
import Button from '@/components/Button';

function tableButtonNameFormatter(str) {
  var word = buttonNameFormatter(str);

  return word.charAt(0).toLowerCase() + word.substring(1);
}

export default function renderTableOptions(editor, variablesClassName, tableOptions) {
  return (
    <>
      {tableOptions?.map(buttonName => {
        let onClickAction = () => {
          editor.chain().focus()[tableButtonNameFormatter(buttonName)]().run();
        };

        if (buttonName === 'insert table') {
          onClickAction = () => {
            editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
          };
        }

        return (
          <Button
            text={buttonName}
            category='neutral'
            key={buttonName}
            onClick={() => onClickAction()}
            variablesClassName={classNames(variablesClassName)}
          />
        );
      })}
    </>
  );
}
