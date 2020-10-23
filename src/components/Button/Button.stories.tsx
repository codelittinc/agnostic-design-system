import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '@/components/Button';

const stories = storiesOf('Components/Button', module);

stories.addDecorator(withKnobs);

stories.add('Primary', () => {
  const label = text('Primary button', 'Click me');
  return (
    <Button onClick={action('button-click')} label={label} />
  );
});

stories.add('Secondary', () => {
  const label = text('Secondary button', 'Click me');
  return (
    <Button onClick={action('button-click')} label={label} category="secondary" />
  );
});
