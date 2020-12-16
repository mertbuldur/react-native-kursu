import React from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";

export default class Drawer extends React.Component {

    constructor() {
        super();
    }



    render() {
        return(
            <SafeAreaView>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail',{
                        id:5,
                        name:'Mert'
                    })}>
                        <Text>Go to Detail</Text>
                    </TouchableOpacity>
                    <View style={{ height:100,backgroundColor:'black'}} />
                    <View style={{ height:100,backgroundColor:'blue'}} />
                    <View style={{ height:100,backgroundColor:'green'}} />
                    <View style={{ height:100,backgroundColor:'white'}} />
                    <View style={{ height:100,backgroundColor:'pink'}} />
                    <View style={{ height:100,backgroundColor:'red'}} />
                    <View style={{ height:100,backgroundColor:'blue'}} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}
