/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


import styles from './src/components/Styles';
import Home from './src/components/Home';
import Landing from './src/components/Landing';
import BottomTabs from './src/components/BottomTabs';
import Fresh from './src/Data/Fresh';
import Frozen from './src/Data/Frozen';
import Medical from './src/Data/Medical';
import Toiletries from './src/Data/Toiletries';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

  return (
    <>
 
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      {/* <Stack.Screen name = "signup" component={Landing}/> */}
      {/* <Stack.Screen name="Home" component={({navigation}) => <BottomTabs navigation={navigation}} /> */}
      <Stack.Screen
            name="Main"
            component={BottomTabs}
          />
      <Stack.Screen name="Fresh" component={Fresh} />
      <Stack.Screen name="Frozen" component={Frozen} />
      <Stack.Screen name="Medical" component={Medical} />
      <Stack.Screen name="Toiletries" component={Toiletries} />
    </Stack.Navigator>
  </NavigationContainer>

  </>
  );
}

export default App;
