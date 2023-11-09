import * as React from 'react';
import { BottomNavigation, Icon, Text } from 'react-native-paper';
import { ScrollView } from 'react-native/Libraries/Components/ScrollView/ScrollView';

const HomeRoute = () => <Text>Hey there</Text>;

const MapRoute = () => <Text>Map</Text>;

const ListsRoute = () => <Text>Lists</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

// const homeIcon = Icon.

const Home = () => {
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
    />
    </>
  );
};

export default Home;