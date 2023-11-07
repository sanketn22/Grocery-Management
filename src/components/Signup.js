import styles from "./Styles"

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const { TextInput, View, Image } = require("react-native")

const Signup = ()=>{



return(
    <View 
    style={{justifyContent:"center", alignItems:"center", backgroundColor:"FF8080"}}>

        <Image
            source={require('D:\Projects\Grocker\src\resuorces\home.png')}/>


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