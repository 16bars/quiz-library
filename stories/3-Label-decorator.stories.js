import React from 'react';
import { action } from '@storybook/addon-actions';
import { LabeledCheckbox } from '../src/components/Checkbox';

export default {
  title: 'withLabel',
};

export const LabelWithCheckboxExample = () => <LabeledCheckbox onClick={() => console.log('clicked')} label="option 1" name="nametest" id="nametest" />





