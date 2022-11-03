import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ControlledForm from './index';
import Input from '../Input';
import EmailInput from '../EmailInput';
import NumericInput from '../NumericInput';
import PhoneInput from '../PhoneInput';
import Button from '../Button';
import SelectItemsList from '../SelectItemsList';
import Dropdown from '../Dropdown';
import { isArray } from 'lodash';
import mdx from './ControlledForm.stories.mdx';

export default {
  title: 'Components/Forms/Controlled Form',
  component: ControlledForm,
  parameters: {
    docs: {
      page: mdx
    }
  }
} as ComponentMeta<typeof ControlledForm>;

const Template: ComponentStory<typeof ControlledForm> = () => {
  type SelectorType = { name: string; id: string };
  const options: SelectorType[] = [
    { name: 'Software', id: 'Software' },
    { name: 'Financing', id: 'Financing' },
    { name: 'Retail', id: 'Retail' },
    { name: 'Pet', id: 'Pet' },
    { name: 'Law', id: 'Law' }
  ];
  type AnimalType = { value: string; id: number; label: string };
  const animals: AnimalType[] = [
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
    <ControlledForm
      // eslint-disable-next-line no-console
      onSubmit={values => console.log(JSON.stringify(values))}
      initialValues={{ name: 'Default Name', selectItem: options[0] }}
      render={({ getInputControls, isValid }) => {
        return (
          <>
            <Input
              id='input-nome'
              size='large'
              label='Nome'
              required
              {...getInputControls('name')}
            />
            <br />
            <EmailInput
              label='Email'
              id='input-email'
              size='large'
              required
              onClickActionIcon={() => {}}
              validations={[]}
              {...getInputControls('email')}
            />
            <br />
            <div>
              <PhoneInput label='Phone' size='large' {...getInputControls('phone')} />
            </div>
            <br />
            <div>
              <NumericInput
                label='Code'
                id='input-email'
                size='large'
                validations={[]}
                {...getInputControls('code')}
              />
            </div>
            <br />
            <SelectItemsList
              id='input-select-items'
              {...getInputControls<SelectorType>('items')}
              label='Select Items List'
              options={options}
              getItemKey={item => item.id}
              getItemValue={item => item.id}
            />
            <br />
            <Dropdown
              options={animals}
              label='Preferred animal'
              id='ads-dropdown'
              getItemLabel={item => item.label}
              getItemKey={item => item.value}
              getItemValue={item => item.value}
              getListTitle={item => (isArray(item) ? item[0]?.label : item.label)}
              editable
              {...getInputControls<AnimalType | AnimalType[]>('animals')}
            />
            <br />
            <p>
              <Button type='submit' disabled={!isValid} text='Submit' />
            </p>
          </>
        );
      }}
    />
  );
};

export const Story = Template.bind({});
