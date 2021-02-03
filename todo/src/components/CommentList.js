import React from 'react';
import { View , Text , StyleSheet ,TouchableOpacity} from 'react-native';
import NavigationService from '../config/NavigationService';
const CommentList = ({ item ,handleCommentDelete }) =>{
    return <View  style={style.item}>
                <Text style={style.title}>{item.text}</Text>
                <TouchableOpacity onPress={ () => handleCommentDelete(item.id)}><Text>Sil</Text></TouchableOpacity>
            </View>
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

export default CommentList;
