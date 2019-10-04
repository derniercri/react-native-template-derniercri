import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import Apropos from '../screens/Apropos';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Apropos: { screen: Apropos },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
