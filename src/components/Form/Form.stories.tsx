import React from 'react';
import { Meta } from '@storybook/react';
import Form from '@/components/Form';
import Input from '@/components/Input';
import Email from '@/components/EmailInput';
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import SelectItemsList from '@/components/SelectItemsList';
import mdx from './Form.stories.mdx';

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as Meta;

export const Default = () => {
  const options = [
    {
      label: 'Cat',
      value: 'Cat',
      id: 1
    },
    {
      label: 'Dog',
      value: 'Dog',
      id: 2
    }
  ];

  return (
    <Form onSubmit={values => alert(JSON.stringify(values))}>
      <Input required id='username' name='username' placeholder='Username' label='Username' />
      <Dropdown
        name='cool-dropdown'
        label='Preferred animal'
        id='ads-dropdown'
        options={options}
        getItemLabel={item => item.label}
        getItemKey={item => item.value}
        getItemValue={item => item.value}
        getListTitle={item => item.label}
        // @TODO: Update documentation to explain how to customize the form
        formValueName='selected'
        formFieldType='object'
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button id='back-button' text='back' onClick={() => alert('You clicked back!')} />
        <Button id='submit' text='Submit' type='submit' />
      </div>
    </Form>
  );
};

export const withSelectItemsList = () => {
  const options = [
    { name: 'Software', id: 'Software' },
    { name: 'Financing', id: 'Financing' }
  ];

  return (
    <Form onSubmit={values => alert(JSON.stringify(values))}>
      <Input required id='username' name='username' placeholder='Username' label='Username' />
      <SelectItemsList
        name='select-items-list'
        label='Please select an item'
        options={options}
        getItemKey={item => item.id}
        getItemValue={item => item.id}
        formValueName='selected'
        formFieldType='radio'
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button id='back-button' text='back' onClick={() => alert('You clicked back!')} />
        <Button id='submit' text='Submit' type='submit' />
      </div>
    </Form>
  );
};

export const WithHTMLTagsInside = () => {
  return (
    <Form onSubmit={values => alert(JSON.stringify(values))}>
      <div>
        <h1>This is my form!</h1>
        <Input required id='username' name='username' placeholder='Username' label='Username' />
        <Email id='email' name='email' placeholder='Email' label='Email' />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button id='back-button' text='back' onClick={() => alert('You clicked back!')} />
          <Button id='submit' text='Submit' type='submit' />
        </div>
      </div>
    </Form>
  );
};

export const WithInitialValues = () => {
  const initialValues = {
    username: 'Batman',
    email: 'bat@man.com',
    animal: {
      label: 'Dog',
      value: 'Dog',
      id: 2
    },
    list: {
      name: 'Software',
      id: 'Software'
    }
  };

  const options = [
    {
      label: 'Cat',
      value: 'Cat',
      id: 1
    },
    {
      label: 'Dog',
      value: 'Dog',
      id: 2
    }
  ];

  const selectOptions = [
    { name: 'Software', id: 'Software' },
    { name: 'Financing', id: 'Financing' }
  ];

  return (
    <Form initialValues={initialValues} onSubmit={values => alert(JSON.stringify(values))}>
      <div>
        <h1>This is my form!</h1>
        <Input required id='username' name='username' placeholder='Username' label='Username' />
        <Email id='email' name='email' placeholder='Email' label='Email' />
        <Dropdown
          name='animal'
          label='Preferred animal'
          id='ads-dropdown'
          options={options}
          getItemLabel={item => item.label}
          getItemKey={item => item.value}
          getItemValue={item => item.value}
          getListTitle={item => item.label}
          formValueName='selected'
          formFieldType='object'
        />
        <br />
        <SelectItemsList
          name='list'
          options={selectOptions}
          getItemKey={item => item.id}
          getItemValue={item => item.id}
          formValueName='selected'
          formFieldType='radio'
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <Button id='back-button' text='back' onClick={() => alert('You clicked back!')} />
          <Button id='submit' text='Submit' type='submit' />
        </div>
      </div>
    </Form>
  );
};
