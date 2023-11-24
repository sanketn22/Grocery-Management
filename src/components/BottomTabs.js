import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Home from './Home';
import styles from './Styles';


const HomeRoute = () => <Home/>;

const MapRoute = () => <Text>Map</Text>;

const ListsRoute = () => <Text>Lists</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const BottomTabs = (props)=>{   
    
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'home', title: 'Home', focusedIcon: require('../resuorces/house.png'), unfocusedIcon: require('../resuorces/house.png')},
      { key: 'maps', title: 'Map', focusedIcon: 'album' },
      { key: 'lists', title: 'Lists', focusedIcon: 'history' },
      { key: 'profile', title: 'Profile', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      home: HomeRoute,
      maps: MapRoute,
      lists: ListsRoute,
      profile: ProfileRoute,
    });
  
    return (
      <>
     
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.bottom}
      />
      </>
    );
}

export default BottomTabs