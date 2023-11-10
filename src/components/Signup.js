import styles from "./Styles"
import { useState } from "react";
import { Text, TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';


const myIcon = <Icon name="rocket" size={30} color="#900" />;

const { View, Image } = require("react-native");


const Signup = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    return (
        <>
            <View
            style={{ justifyContent: "center", backgroundColor: "#FFCC70", height: '100%', flexDirection:"column"}}>
                <View style={{elevation:4, shadowColor:'red', shadowOffset:10}}>
                <Image
                    source={require('../resuorces/appIcon1.png')}
                    style={{ height: 200, width: 200, marginTop:-100,alignSelf:"center"}} />
                    </View>
                    
                <TextInput
                    placeholder="Email"
                    value={user}
                    onChangeText={text => setUser(text)}
                    style={[styles.signupTI, { color: "Red" }]}
                    inputMode="email"
                />

                <TextInput
                    placeholder="password"
                    value={pass}
                    onChangeText={text => setPass(text)}
                    style={[styles.signupTI, { textColor: "white" }]}
                    secureTextEntry = {true}
                    
                />
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Libero nunc consequat interdum varius sit amet mattis vulputate enim. 
                Pretium lectus quam id leo. 
                Felis eget nunc lobortis mattis aliquam faucibus purus in. 
                Est ante in nibh mauris cursus mattis molestie a iaculis.                 
                </Text>
            </View>

        </>
    );



    // return (
    //     <View
    //         style={{ justifyContent: "center", alignItems: "center", backgroundColor: "FF8080" }}>

    //         <Image
    //             source={require('../resuorces/home.png')}
    //             style={{ height: 25, width: 25 }} />


    //         <TextInput style={styles.signupTI}
    //             placeholder="username or email"
    //             placeholderTextColor="grey" />

    //         <TextInput style={styles.signupTI}
    //             placeholder="password"
    //             placeholderTextColor="grey" />



    //     </View>
    // )

}

export default Signup