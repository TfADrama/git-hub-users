import React from 'react';
import App from './app/index';
import {Provider} from 'react-redux';
import store from './app/store';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
