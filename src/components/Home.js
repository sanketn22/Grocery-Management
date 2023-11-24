//render 4 cards for different categories of items
//add to list button

import { Button, TouchableRipple } from 'react-native-paper';

import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import Fresh from '../components/Data/Fresh';
import Frozen from '../components/Data/Frozen';
import Medical from '../components/Data/Medical';
import Toiletries from '../components/Data/Toiletries';
import { useNavigation } from '@react-navigation/native';


const Home = (props) => {

  const navigation = useNavigation();
  return (
    <>
      <View
        style={{ height:'100%', flexDirection: 'row', justifyContent:'center', alignItems:'center',  backgroundColor:'yellow', }}
      >
        <View
          style={{ marginLeft: '100', flexDirection:'column' }}>
          <TouchableRipple
            onPress={() => navigation.navigate('Fresh')}
            rippleColor="rgba(0, 0, 0, .32)"
            // key={'CategoryCard'}
            style={{ backgroundColor: 'blue' }}
          >
            <Text>Press anywhere</Text>


          </TouchableRipple>
       
          <TouchableRipple
            onPress={() => navigation.navigate('Frozen')}
            rippleColor="rgba(0, 0, 0, .32)"
            // key={'CategoryCard'}
            style={{ backgroundColor: 'red' }}
          >
            <Text>Press anywhere</Text>

          </TouchableRipple>
        </View>

        <View
          style={{ marginLeft: '100' }}>
          <TouchableRipple
            onPress={() => navigation.navigate('Medical')}
            rippleColor="rgba(0, 0, 0, .32)"
            // key={'CategoryCard'}
            style={{ backgroundColor: 'blue' }}
          >
            <Text>Press anywhere</Text>

          </TouchableRipple>
          <TouchableRipple
            onPress={() => navigation.navigate('Toiletries')}
            rippleColor="rgba(0, 0, 0, .32)"
            // key={'CategoryCard'}
            style={{ backgroundColor: 'red' }}
          >
            <Text>Press anywhere</Text>

          </TouchableRipple>
        </View>

      </View>



    </>
  )

};

export default Home;