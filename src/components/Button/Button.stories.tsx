import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../global.css';
import { text, boolean, withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './index';
import exampleIcon from '../../assets/images/icons/icon.svg';

const THEME_OPTIONS = ['default', 'ghost', 'text'];
const ICON_POSITION_OPTIONS = ['left', 'right', 'full-left', 'full-right'];

const stories = storiesOf('Components/Button', module);

stories.addDecorator(withKnobs);

stories.add('Text', () => {
  const buttonText = text('text', 'Click me');
  const wrapperClassName = text('wrapperClassName', '');
  const disabled = boolean('disabled', false);
  const big = boolean('big', false);
  const fullWidth = boolean('fullWidth', false);
  const theme = select('theme', THEME_OPTIONS, 'default');

  return (
    <Button
      onClick={action('button-click')}
      text={buttonText}
      wrapperClassName={wrapperClassName}
      disabled={disabled}
      big={big}
      fullWidth={fullWidth}
      theme={theme}
    />
  );
});

stories.add('Text and icon', () => {
  const buttonText = text('text', 'Click me');
  const wrapperClassName = text('wrapperClassName', '');
  const disabled = boolean('disabled', false);
  const big = boolean('big', false);
  const fullWidth = boolean('fullWidth', false);
  const theme = select('theme', THEME_OPTIONS, 'default');

  const iconPosition = select('iconPosition', ICON_POSITION_OPTIONS, 'left');

  return (
    <Button
      icon={exampleIcon}
      iconPosition={iconPosition as any}
      onClick={action('button-click')}
      text={buttonText}
      wrapperClassName={wrapperClassName}
      disabled={disabled}
      big={big}
      fullWidth={fullWidth}
      theme={theme}
    />
  );
});

stories.add('Only icon', () => {
  const wrapperClassName = text('wrapperClassName', '');
  const disabled = boolean('disabled', false);
  const big = boolean('big', false);
  const fullWidth = boolean('fullWidth', false);
  const theme = select('theme', THEME_OPTIONS, 'default');

  return (
    <Button
      icon={exampleIcon}
      onClick={action('button-click')}
      wrapperClassName={wrapperClassName}
      disabled={disabled}
      big={big}
      fullWidth={fullWidth}
      theme={theme}
    />
  );
});
