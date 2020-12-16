import React from 'react';
import { View , SafeAreaView , FlatList} from  'react-native';
import Item from "./Item";

export default class App extends React.Component
{


    renderItem = ({ item}) => {
        return <Item item={item} />
    }

    render(){
        return <SafeAreaView style={{ flex:1}}>
                <FlatList
                    style={{flex:1,backgroundColor:'#f5f5f5',padding:10}}
                    data={['Elma','Armut','Muz']}
                    renderItem={this.renderItem}
                />
                </SafeAreaView>
    }
}
