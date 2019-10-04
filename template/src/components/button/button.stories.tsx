import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { CenteredView } from '../../../storybook/helper-components';

import Button from './button';

storiesOf('Button', module)
  .addDecorator(getStory => <CenteredView>{getStory()}</CenteredView>)
  .add('with text', () => <Button onPress={action('clicked-text')}>Hello world !</Button>)
  .add('with smiley', () => <Button onPress={action('clicked-text')}>🔥</Button>);
