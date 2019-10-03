import React from 'react';
import { Provider } from 'react-redux';
import './modules/i18n';

import store from './store';
import Home from './Home';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
