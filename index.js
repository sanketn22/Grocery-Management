import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';

export default function Main() {
  return (
    <PaperProvider>
      <App/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

// AppRegistry.registerComponent(appName, () => App);

// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
