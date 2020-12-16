import React from 'react';
import { View , Text , StyleSheet} from 'react-native';
import firebase from "@react-native-firebase/app";

const Message  = ({item , index}) => {
   const user = firebase.auth().currentUser;
  const userId = user.uid;
  return <View style={(userId != item.userId  ) ? style.other : style.me}>
            <View style={[style.bubble,{backgroundColor:(userId != item.userId) ? '#EAEAEA' : '#30B485' }]}>
                <Text style={{ fontSize:17,color:(userId != item.userId) ? '#575757' : 'white'}}>{item.text}</Text>
                <Text style={{ fontSize:11,color:(userId != item.userId) ? '#575757' : 'white'}}>{item.userName}</Text>
            </View>
         </View>
};

const style = StyleSheet.create({
    other:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-start',

    },
    me:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end',
    },
    bubble:{
        padding:20,
        width:150,
        marginBottom:10,
        borderRadius:10
    }
})


export default Message;
