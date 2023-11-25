import { useState } from 'react'
import { View } from 'react-native'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux'
import styles from '../Styles';

import { add_to_list, remove_from_list } from '../../reduxFiles/Action';

const ItemList = (props) => {
  const item = props.item;
  const [qty, setQty] = useState('');
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.reducer)

  const handleAdd = (item) => {
    console.log(item);
    // [... item, ]
    dispatch(add_to_list(item))
  }
  return (
    <View
      style={{ backgroundColor: '#2B2A4C' }}
    >
      <Card
        style={styles.itemList}>
        <Card.Title title={item.name} />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <TextInput
            placeholder='qty'
            onChangeText={setQty}></TextInput>
          <Text>{item.price}</Text>
          <Button
            onPress={() => handleAdd(item)}
          >Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default ItemList;