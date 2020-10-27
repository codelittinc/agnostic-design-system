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
    <Button onClick={action('button-click')} label={label} category="primary" />
  );
});

stories.add('Secondary', () => {
  const label = text('Secondary button', 'Click me');
  return (
    <Button onClick={action('button-click')} label={label} category="secondary" />
  );
});

stories.add('Fixed', () => {
  const label = text('Fixed button', 'Click me');
  return (
    <Button onClick={action('button-click')} label={label} fixed />
  );
});

stories.add('Positive', () => {
  const label = text('Positive button', 'Click me');
  return (
    <Button onClick={action('button-click')} label={label} category="positive" />
  );
});

stories.add('Neutral', () => {
  const label = text('Neutral button', 'Click me');
  return (
    <Button onClick={action('button-click')} label={label} />
  );
});

stories.add('Negative', () => {
  const label = text('Negative button', 'Click me');
  return (
    <Button onClick={action('button-click')} label={label} category="negative" />
  );
});

stories.add('Ghost', () => {
  const label = text('Ghost button', 'Click me');
  return (
    <Button onClick={action('button-click')} label={label} category="ghost" />
  );
});
