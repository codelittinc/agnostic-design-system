import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../global.css';
import { text, boolean, withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './index';
import exampleIcon from '../../assets/images/icons/icon.svg';

const stories = storiesOf('Components/Button', module);

stories.addDecorator(withKnobs);

stories.add('Text', () => {
  const buttonText = text('text', 'Click me');
  const wrapperClassName = text('wrapperClassName', '');
  const disabled = boolean('disabled', false);
  const big = boolean('big', false);
  const fullWidth = boolean('fullWidth', false);

  return (
    <Button
      onClick={action('button-click')}
      text={buttonText}
      wrapperClassName={wrapperClassName}
      disabled={disabled}
      big={big}
      fullWidth={fullWidth}
    />
  );
});

stories.add('Text and icon', () => {
  const buttonText = text('text', 'Click me');
  const wrapperClassName = text('wrapperClassName', '');
  const disabled = boolean('disabled', false);
  const big = boolean('big', false);
  const fullWidth = boolean('fullWidth', false);

  const iconPositionOptions: any = ['left', 'right', 'full-left', 'full-right'];
  const iconPosition = select('iconPosition', iconPositionOptions, 'left');

  return (
    <Button
      icon={exampleIcon}
      iconPosition={iconPosition}
      onClick={action('button-click')}
      text={buttonText}
      wrapperClassName={wrapperClassName}
      disabled={disabled}
      big={big}
      fullWidth={fullWidth}
    />
  );
});

stories.add('Only icon', () => {
  const wrapperClassName = text('wrapperClassName', '');
  const disabled = boolean('disabled', false);
  const big = boolean('big', false);
  const fullWidth = boolean('fullWidth', false);

  return (
    <Button
      icon={exampleIcon}
      onClick={action('button-click')}
      wrapperClassName={wrapperClassName}
      disabled={disabled}
      big={big}
      fullWidth={fullWidth}
    />
  );
});
