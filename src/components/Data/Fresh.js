

import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ScrollView} from 'react-native'
import ItemList from '../ItemList';



const Fresh = ()=>{
//fetch fresh items from the db and list it here, use api Endpoint

    const fresh = [{
      id:1,
      name:'iPhone 15',
      price:100000,
      category:'mobile'
  },
  {
    id:2,
    name:'Nikon Camera',
    price:10000,
    category:'Camera'
},
{
  id:3,
  name:'Panasonic Tubelight',
  price:600,
  category:'Electronics'
}];

    return(
        <ScrollView >
        
        {
          fresh.map(
            (item) => <ItemList item={item}/>
          )
        }
        <Text>Fresh</Text>

      </ScrollView>
    )
}

export default Fresh;