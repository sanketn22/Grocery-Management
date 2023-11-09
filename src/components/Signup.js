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
            style={{ justifyContent: "center", backgroundColor: "#FFCC70", height: '100%', flexDirection:"column" }}>

                <Image
                    source={require('../resuorces/appIcon1.png')}
                    style={{ height: 200, width: 200, marginTop:-250,alignSelf:"center"}} />
                    
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
                    Hi there
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