import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Input from './Input';
import DisabledInput from './DisabledInput';
import Select from './Select';
import Checkbox from './Checkbox';
import FormGroup from './FormGroup';
import AutoComplete from './AutoComplete';
import UI from '../UI';
import Component from '../Component';

const stories = storiesOf('Forms', module);

stories.add('Input', () => (
  <UI>
    <Component>
      <Input
        fieldName="Includes"
        fieldId="includes"
        onChangeFunction={() => {}}
      />
    </Component>
  </UI>
));

stories.add('Disabled Input', () => (
  <UI>
    <Component>
      <DisabledInput
        fieldName="Includes"
        fieldId="includes"
      />
    </Component>
  </UI>
));

stories.add('Select', () => (
  <UI>
    <Component>
      <Select
        name="Test field"
        options={[
          { text: 'Test without value' },
          { text: 'Test with value', value: 'value test' },
        ]}
      />
    </Component>
  </UI>
));

stories.add('Checkbox', () => (
  <UI>
    <Component>
      <Checkbox
        fieldId="prepay"
        onClickFunction={() => {}}
        text="prepay"
      />
    </Component>
  </UI>
));

stories.add('Form Group', () => (
  <UI>
    <Component>
      <FormGroup fieldId="formGroup" fieldName="A collection of Checkboxes">
        <Checkbox fieldId="red" text="Red" />
        <Checkbox fieldId="green" text="Green" />
        <Checkbox fieldId="yellow" text="Yellow" />
      </FormGroup>
    </Component>
  </UI>
));

stories.add('Auto Complete', () => (
  <UI>
    <Component>
      <AutoComplete onChange={() => { }} items={['item value 1', 'item value 2']} />
    </Component>
  </UI>
));

stories.add(
  'Documentation',
  withInfo('Generic HTML list')(() => 'Click the button at top-right to view the info'),
);
