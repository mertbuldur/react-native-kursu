import React from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";

export default class Detail extends React.Component {
    static navigationOptions = ( { navigation }) =>  {
        return {
            title:'Detay',
            headerLeft:<TouchableOpacity onPress={()=>navigation.goBack()}><Text>Geri</Text></TouchableOpacity>,
            headerRight:<Text>Ekle</Text>
        }
    };

    constructor() {
        super();
    }

    componentDidMount() {
        alert(this.props.navigation.getParam("name"));
    }

    render() {
        return(
            <SafeAreaView>
                <ScrollView>
                    <View style={{ height:100,backgroundColor:'red'}} />
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
