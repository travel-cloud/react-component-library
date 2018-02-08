import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Input from './Input';
import Textarea from './Textarea';
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

stories.add('Input with custom classes', () => (
  <UI>
    <Component>
      <Input
        fieldName="Includes"
        fieldId="includes"
        onChangeFunction={() => {}}
        customClasses="info extra-large"
      />
    </Component>
  </UI>
));

stories.add('Textarea', () => (
  <UI>
    <Component>
      <Textarea
        fieldName="Includes"
        fieldId="includes"
        onChangeFunction={() => {}}
      />
    </Component>
  </UI>
));

stories.add('Textarea with custom classes', () => (
  <UI>
    <Component>
      <Textarea
        fieldName="Includes"
        fieldId="includes"
        onChangeFunction={() => {}}
        customClasses="warning medium"
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

stories.add('Read Only Input', () => (
  <UI>
    <Component>
      <Input
        fieldName="Includes"
        fieldId="includes"
        onChangeFunction={() => {}}
        value="12345"
        readOnly
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

stories.add('Select with custom classes', () => (
  <UI>
    <Component>
      <Select
        name="Test field"
        options={[
          { text: 'Test without value' },
          { text: 'Test with value', value: 'value test' },
        ]}
        customClasses="success large"
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

stories.add('Checkbox with custom classes', () => (
  <UI>
    <Component>
      <Checkbox
        fieldId="prepay"
        onClickFunction={() => {}}
        text="prepay"
        customClasses="success large-text"
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
      <AutoComplete
        onChange={() => {}}
        items={[{ text: 'item value 1' }, { text: 'item value 2' }]}
        searchValue="Item"
      />
    </Component>
  </UI>
));

stories.add('Auto Complete with custom classes', () => (
  <UI>
    <Component>
      <AutoComplete
        onChange={() => { }}
        items={[{ text: 'item value 1' }, { text: 'item value 2' }]}
        searchValue="Item"
        customClasses="autocomplete-items"
      />
    </Component>
  </UI>
));

stories.add(
  'Documentation',
  withInfo('Generic HTML list')(() => 'Click the button at top-right to view the info'),
);
