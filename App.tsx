/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './src/components/Styles';
import Home from './src/components/Home';
import Landing from './src/components/Landing';
import BottomTabs from './src/components/BottomTabs';
import Fresh from './src/Data/Fresh';
import Frozen from './src/Data/Frozen';
import Medical from './src/Data/Medical';
import Toiletries from './src/Data/Toiletries';
import ActiveList from './src/components/core-components/ActiveList';
import { useDispatch } from 'react-redux';
import { add_to_list } from './src/reduxFiles/Action';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

    
  };
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      const value = jsonValue != null ? JSON.parse(jsonValue) : [];
      dispatch(add_to_list(value))

    } catch (e) {
      // error reading value
    }
  };
  

  useEffect(()=>{
  getData()
  },[])
  

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
      <Stack.Screen name="ActiveList" component={ActiveList} />
    </Stack.Navigator>
  </NavigationContainer>

  </>
  );
}

export default App;
