import { useState, useEffect } from 'react'
import { View, FlatList, Pressable,  } from "react-native";
import { Text, List, Checkbox } from "react-native-paper";
import { useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';


import { remove_from_list } from '../../reduxFiles/Action';
import styles from '../Styles';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    // saving error
  }
};


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

const Item = (props) => {
  const [checked, setChecked] = useState();
  return (
    <View>
      <Text style={{ color: 'red', textDecorationLine: checked ? 'line-through' : 'none' }}>{props.name}</Text>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        disabled={checked}
      />
    </View>
)};


const ActiveList = () => {
  const list = useSelector((state) => state.reducer); //import data from reducer//

  useEffect(()=>{
    storeData(list)

  },[list] )

  return (
    <View
    style={{}}>
      <FlatList
        data={list}
        renderItem={({ item }) => <Item {...item} />}
      />
      <Pressable
      onPress={()=>{

      }}
      style={styles.saveList}>
        <Text>Save List</Text>
      </Pressable>
    </View>
  )
}

export default ActiveList;