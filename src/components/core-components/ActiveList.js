import { useState } from 'react'
import { FlatList, Pressable, Checkbox } from "react-native";
import { Text, List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { remove_from_list } from '../../reduxFiles/Action';

//import data from reducer//

const ActiveList = () => {
  const list = useSelector((state) => state.reducer);




  const Item = (props) => {
    const [checked, setChecked] = useState(false);
    return (
      <View>
        <Text>{props.title}</Text>
        <Text>{props.qty}</Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
            this.props.disabled(true)                     
          }}
        />
      </View>
    );
  };


  return (
    <SafeAreaView>
      <FlatList
        data={list}
        renderItem={({ item }) => <Item title={item.title} qty={item.qty} />}
        keyExtractor={item => item.id}>

      </FlatList>
    </SafeAreaView>
  )
}

export default ActiveList;