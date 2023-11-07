import styles from "./Styles"
import { useState } from "react";
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const myIcon = <Icon name="rocket" size={30} color="#900" />;

const { View, Image } = require("react-native");


const Signup = ()=>{
    const [text, setText] = useState("");

    return (
        <>
        <View
        style={{justifyContent:"center", backgroundColor:"FF8080"}}>
      <TextInput
        placeholder="Email"
        value={text}
        onChangeText={text => setText(text)}
        style={styles.signupTI}
      />

<TextInput
        placeholder="password"
        value={text}
        onChangeText={text => setText(text)}
        style={styles.signupTI}
      />
      </View>

</>
    );



return(
    <View 
    style={{justifyContent:"center", alignItems:"center", backgroundColor:"FF8080"}}>

        <Image
            source={require('../resuorces/home.png')}
            style={{height:25, width:25}}/>


        <TextInput style={styles.signupTI}
        placeholder="username or email"
        placeholderTextColor="grey"/>

        <TextInput style={styles.signupTI}
        placeholder="password"
        placeholderTextColor="grey"/>
     


    </View>
)

}

export default Signup