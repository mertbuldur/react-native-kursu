import React from 'react';
import {Text, View,Image,StyleSheet} from "react-native";

const Item = ({ item }) => {
  return (<View style={style.card }>
              <Image style={style.avatar} source={{ uri:item.profile_image}} />
              <View style={{ marginLeft:10,justifyContent:'center'}}>
                  <Text style={{ fontWeight:'700'}}>{item.display_name}</Text>
                  <Text>{item.location}</Text>
              </View>
        </View>)
};
const style = StyleSheet.create({
 card:{
     flex:1,
     padding:10,
     paddingHorizontal:15,
     backgroundColor:'white',
     flexDirection:'row',
     marginBottom:5,
     borderBottomWidth:1,
     borderBottomColor:'#ddd'
 },
    avatar:{
        width:60,
        height:60,
        borderRadius:100,
        borderWidth:2,
        borderColor:'#ddd'
 }
})
export default Item;
