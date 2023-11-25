

import * as React from 'react';
import {useState, useEffect} from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { ScrollView } from 'react-native';
import axios from 'axios'
import ItemList from '../components/core-components/ItemList';



const Fresh = () => {
  //fetch fresh items from the db and list it here, use api Endpoint

  // const [fresh, setFresh] = useState([]); // State to store MongoDB documents as an array

  // useEffect(() => {
  //   const fetchData = () => {
   
  //       // Make a GET request to fetch data from MongoDB
  //       console.log('in');
  //       axios.get("http://192.168.137.1:8080/api/getAll").then(data => {console.log(data);setFresh(data.data)}).catch(err=>console.log(err));
     
  //   };

  //   fetchData();
  // }, []);

  const fresh=[
    {
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
}
]
  

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