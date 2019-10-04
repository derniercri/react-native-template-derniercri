import { AppRegistry } from 'react-native';

import Storybook from './storybook';
import App from './src/App';
import { name as appName } from './app.json';

const IS_STORYBOOK = true;

const Render = IS_STORYBOOK && __DEV__ ? Storybook : App;

AppRegistry.registerComponent(appName, () => Render);
