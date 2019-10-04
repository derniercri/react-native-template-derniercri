import { AppRegistry } from 'react-native';

import Storybook from './storybook';
import App from './src/App';
import { name as appName } from './app.json';

const IS_STORYBOOK = false;

const Render = IS_STORYBOOK && __DEV__ ? Storybook : App;

if (__DEV__) {
  import('./reactotron-config').then(() => {
    console.log('Reactotron Configured');
  });
}

AppRegistry.registerComponent(appName, () => Render);
