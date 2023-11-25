
import { Button, TouchableRipple, Card, Text } from 'react-native-paper';

import {
    View,
    // Text,
    TouchableHighlight,
    Image
} from 'react-native'


import { useNavigation } from '@react-navigation/native';

import styles from './Styles';


const List = () => {
    const navigation = useNavigation();

    return (
        <View
            style={styles.home}
        >
            <View
                style={{ gap: 50 }}>
                <TouchableRipple
                    onPress={() => navigation.navigate('ActiveList')}
                    rippleColor="rgba(0, 0, 0, .32)"
                    // key={'CategoryCard'}
                    style={[styles.ripple,]}
                >
                    <>
                        <Text variant="headlineMedium" style={{ color: '#363062' }}>Active</Text>
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
                        <Text variant="headlineMedium" style={{ color: '#363062' }}>Completed</Text>
                        <Image source={require('../resuorces/frozen.png')} resizeMethod='resize' resizeMode='cover' />
                    </>
                </TouchableRipple>
            </View>

        </View>


    )

};
export default List;