

import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ScrollView} from 'react-native'
import ItemList from '../ItemList';



const Fresh = ()=>{
//fetch fresh items from the db and list it here, use api Endpoint

    const fresh = [{}];

    return(
        <ScrollView >
        
        {/*
          fresh.map(
            (item)=><ItemList item={item}/>
          )
        } */}
        <Text>Fresh</Text>

      </ScrollView>
    )
}

export default Fresh;