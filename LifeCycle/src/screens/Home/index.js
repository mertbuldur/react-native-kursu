import React from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";

export default class Home extends React.Component {

    /*
    static navigationOptions = ( { navigation }) =>  {
        return {
            title:'Anasayfa',
            headerLeft:<TouchableOpacity onPress={()=>navigation.goBack()}><Text>Geri</Text></TouchableOpacity>,
            headerRight:<Text>Ekle</Text>
        }
    };

     */

    constructor() {
        super();
    }

    componentDidMount() {
        /*
        this.props.navigation.addListener('willFocus',() => {
            alert('Index e Geri geldin');
        })
         */
        this.props.navigation.addListener('willBlur',() => {
            alert('Indexten Gittin');
        })
    }


    render() {
        return(
            <SafeAreaView>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                        <Text>Git</Text>
                    </TouchableOpacity>
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
