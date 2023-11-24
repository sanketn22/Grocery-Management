

import * as React from 'react';
import {useState, useEffect} from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ScrollView } from 'react-native';
import axios from 'axios'
import ItemList from '../ItemList';



const Fresh = () => {
  //fetch fresh items from the db and list it here, use api Endpoint

  const [fresh, setFresh] = useState([]); // State to store MongoDB documents as an array

  useEffect(() => {
    const fetchData = () => {
   
        // Make a GET request to fetch data from MongoDB
        axios.get("http:// 192.168.1.10:8080/api/getAll").then(data => setFresh(data.data)).catch(err=>console.log(err));
     
    };

    fetchData();
  }, []);
  

  return (
    <ScrollView>

      {
        fresh.map(
          (item) => <ItemList key={item.id} item={item} />
        )
      }

    </ScrollView>
  )
}

export default Fresh;