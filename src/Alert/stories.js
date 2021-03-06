import React from 'react';
import { addParameters, storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import Alert from './index';
import { action } from '@storybook/addon-actions';
import { callback } from '../storyUtils';

addParameters({
  jsx: { skip: 0 },
});

const TYPES = {
  info: 'info',
  error: 'error',
  success: 'success',
  warning: 'warning',
};

storiesOf('Alert', module).add('All Knobs', () => {
  let content = text('content', 'Nope! Nope! Nope! Nope! Nope!');
  let cta = text('cta', 'burn it');
  let status = text('status', 'spider');
  let persist = boolean('persist', false);
  let type = select('type', TYPES, '');

  return (
    <Alert
      {...(cta && { cta })}
      {...(status && { status })}
      {...(persist && { persist })}
      {...(type && { type })}
      onDismiss={callback(action('onDismiss'))}
      onSubmit={callback(action('onSubmit'))}
    >
      {content}
    </Alert>
  );
});
