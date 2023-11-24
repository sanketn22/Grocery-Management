import * as React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import store from './src/reduxFiles/Store'


export default function Main() {
  return (
    <Provider store={store}>
    <PaperProvider>
      <App/>
    </PaperProvider>
</Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

