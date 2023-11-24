//render 4 cards for different categories of items
//add to list button

import { Button, TouchableRipple, Card, Text } from 'react-native-paper';

import {
  View,
  // Text,
  TouchableHighlight,
  Image
} from 'react-native'


import { useNavigation } from '@react-navigation/native';

import styles from './Styles';


const Home = (props) => {

  const navigation = useNavigation();
  return (

    <View
      style={styles.home}
    >
      <View
        style={{ gap: 75 }}>
        <TouchableRipple
          onPress={() => navigation.navigate('Fresh')}
          rippleColor="rgba(0, 0, 0, .32)"
          // key={'CategoryCard'}
          style={[styles.ripple,]}
        >
          <>
            <Text variant="headlineMedium" style={{ color: '#363062' }}>Fresh</Text>
            <Image source={require('../resuorces/fruit.png')} resizeMethod='resize' resizeMode='cover' />
          </>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => navigation.navigate('Frozen')}
          rippleColor="rgba(0, 0, 0, .32)"
          // key={'CategoryCard'}
          style={[styles.ripple]}
        >
          <>
          <Text variant="headlineMedium" style={{ color: '#363062' }}>Frozen</Text>
            <Image source={require('../resuorces/frozen.png')} resizeMethod='resize' resizeMode='cover' />
          </>
        </TouchableRipple>
      </View>

      <View
        style={{ gap: 75 }}>
        <TouchableRipple
          onPress={() => navigation.navigate('Medical')}
          rippleColor="rgba(0, 0, 0, .32)"
          // key={'CategoryCard'}
          style={[styles.ripple]}
        >
          <>
          <Text variant="headlineMedium" style={{ color: '#363062' }}>Medical</Text>
            <Image source={require('../resuorces/dispensary.png')} resizeMethod='resize' resizeMode='cover' />
          </>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => navigation.navigate('Toiletries')}
          rippleColor="rgba(0, 0, 0, .32)"
          // key={'CategoryCard'}
          style={[styles.ripple]}
        >
          <>
          <Text variant="headlineMedium" style={{ color: '#363062' }}>Toiletries</Text>
            <Image source={require('../resuorces/toiletries.png')} resizeMethod='resize' resizeMode='cover' />
          </>
        </TouchableRipple>
      </View>

    </View>


  )

};

export default Home;