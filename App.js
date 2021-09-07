/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Routes from './src/Navigation/Routes';
import theme from './src/Components/Theme';
import {ThemeProvider} from '@shopify/restyle';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Redux/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Routes />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
