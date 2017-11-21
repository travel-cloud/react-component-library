import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Input from './Input';
import DisabledInput from './DisabledInput';
import Select from './Select';
import Checkbox from './Checkbox';
import FormGroup from './FormGroup';
import AutoComplete from './AutoComplete';

const stories = storiesOf('Forms', module);

stories.add(
  'Documentation',
  withInfo('Generic HTML list')(() => 'Click the button at top-right to view the info'),
);

stories.add('Input', () => (
  <Input
    fieldName="Includes"
    fieldId="includes"
    onChangeFunction={() => {}}
  />
));

stories.add('Disabled Input', () => (
  <DisabledInput
    fieldName="Includes"
    fieldId="includes"
  />
));

stories.add('Select', () => (
  <Select
    name="Test field"
    options={[
      { text: 'Test without value' },
      { text: 'Test with value', value: 'value test' },
    ]}
  />
));

stories.add('Checkbox', () => (
  <Checkbox
    fieldId="prepay"
    onClickFunction={() => {}}
    text="prepay"
  />
));

stories.add('Form Group', () => (
  <FormGroup fieldId="formGroup" fieldName="A collection of Checkboxes">
    <Checkbox fieldId="red" text="Red" />
    <Checkbox fieldId="green" text="Green" />
    <Checkbox fieldId="yellow" text="Yellow" />
  </FormGroup>
));

stories.add('Auto Complete', () => (
  <AutoComplete onChange={() => { }} items={['item value 1', 'item value 2']} />
));
