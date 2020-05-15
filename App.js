import React from 'react';
import { createAppContainer } from 'react-navigation';
import MainNavigator from './src/navigators/MainNavigator';
import { Provider } from 'react-redux';
import Store from './src/Store';
const Appcontainer = createAppContainer(MainNavigator);


export default () => (
  <Provider store={Store}>
      <Appcontainer />
  </Provider>
)
