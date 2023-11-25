 import { StyleSheet } from "react-native";
 
 const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },

    signupTI :{
      justifyContent: 'center',
      backgroundColor: "black",
      height : 45,   
      // textColor : 'white',
      fontSize:10,
      margin: 10,
      // borderRadius:10,
      borderRadius: 5,
    },

    bottom:{
      backgroundColor:'#222222',
      borderRadius: 25,
    },

    home:{
      height:'100%', 
      flexDirection: 'row', 
      justifyContent:'center', 
      alignItems:'center',  
      backgroundColor:'#210062', 
      gap: 20,
    },

    ripple:{
      height: 225,
      width :175,
      marginTop:'15',
      justifyContent:'center',
      alignItems:'center',
      borderRadius : 50,
      backgroundColor :'#F99417'
    },

    itemList:{
      margin:15,
      backgroundColor:'#EA906C'

    },

    saveList:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'red'

    }
  });

  export default styles;