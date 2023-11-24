import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ScrollView} from 'react-native'
import ItemList from '../components/core-components/ItemList';


const Frozen = ()=>{
//fetch fresh items from the db and list it here, use api Endpoint

    const frozen = [{}];

    return(
        <ScrollView >
        {/* <Header/>
        {
          frozen.map(
            (item)=><ItemList item={item}/>
          )
        } */}
        <Text>Frozen</Text>

      </ScrollView>
    )
}

export default Frozen;