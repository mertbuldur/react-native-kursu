import React from 'react';
import { View , Text , StyleSheet ,TouchableOpacity} from 'react-native';
import NavigationService from '../config/NavigationService';
const NoteList = ({ item }) =>{
    return <TouchableOpacity onPress={() => NavigationService.navigate('Detail',{ id: item.id})} style={style.item}>
                <Text style={style.title}>{item.name}</Text>
           </TouchableOpacity>
}

const style = StyleSheet.create({
    item: {
        padding:15,
        backgroundColor:'white',
        marginBottom:5,
        marginTop:5,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:5
    },
   title:{
        fontSize:16
   }
});

export default NoteList;
