import React from 'react';
import { View , Text , StyleSheet,TouchableOpacity} from 'react-native';
import {SwipeListView} from "react-native-swipe-list-view";

const Item = ({ item }) => {
    return (
        <SwipeListView
            data={[item]}
            renderItem={(data) =>(
                <View style={style.item}><Text>{item}</Text></View>
            )}
            renderHiddenItem={(data)=> (
                <View style={style.rowBack}>
                    <TouchableOpacity
                        style={[style.backLeftBtn]}
                    >
                        <Text style={{ color:'white'}}>Arşivle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[style.backRightBtn,style.backRightBtnLeft]}
                    >
                        <Text style={{ color:'white'}}>Düzenle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.backRightBtn}
                    >
                        <Text style={{ color:'white'}}>Sil</Text>
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={80}
            rightOpenValue={-160}
        />
    )
}

const style = StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding:15,
        marginBottom:10,
        borderWidth:1,
        borderColor:'#ddd'
    },
    rowBack:{
        alignItems:'center',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    backRightBtnLeft:{
        right:75,
        backgroundColor:'blue'
    },
    backRightBtn:{
        paddingVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        borderRadius:5,
        top:0,
        width:60,
        margin:5,
        right:0,
        backgroundColor: 'red'
    },
    backLeftBtn:{
        paddingVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        borderRadius:5,
        top:0,
        width:60,
        margin:5,
        left:0,
        backgroundColor: 'green'
    }
})

export default Item;
