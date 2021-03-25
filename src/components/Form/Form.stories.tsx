import React from 'react';
import { Meta } from '@storybook/react';
import Form from '@/components/Form';
import Input from '@/components/Input';
import Email from '@/components/EmailInput';
import Button from '@/components/Button';

export default {
  title: 'Components/Form',
  component: Form
} as Meta;

export const Default = () => {
  return (
    <Form onSubmit={values => alert(JSON.stringify(values))}>
      <Input required id='username' name='username' placeholder='Username' label='Username' />
      <Email id='email' name='email' placeholder='Email' label='Email' />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button id='back-button' text='back' onClick={() => alert('You clicked back!')} />
        <Button id='submit' text='Submit' type='submit' />
      </div>
    </Form>
  );
};

export const WithHTMLTagsInside = () => {
  return (
    <Form onSubmit={values => alert(JSON.stringify(values))}>
      <h1>This is my form!</h1>
      <Input required id='username' name='username' placeholder='Username' label='Username' />
      <Email id='email' name='email' placeholder='Email' label='Email' />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button id='back-button' text='back' onClick={() => alert('You clicked back!')} />
        <Button id='submit' text='Submit' type='submit' />
      </div>
    </Form>
  );
};
