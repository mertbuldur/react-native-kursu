import React from 'react';
import { SafeAreaView, View,Text } from 'react-native';
import io from 'socket.io-client/dist/socket.io';
const socket = io("http://localhost:3001",{
    jsonp:false,
    reconnection:true,
    reconnectionDelay:100,
    reconnectionAttempts:10000,
    transports:["websocket"]
});
export default class App extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            rate: 0
        }
    }


    componentDidMount() {
        socket.on("connect",function(){
            console.log("Sockete baglantı");
        });

        socket.emit('welcome-application');

        socket.on('send-client',(data)=>{
            this.setState({ rate:data.value});
        });
        socket.on("welcome-app",(data)=>{
            alert(data.text);
        })

    }

    render(){
        return <SafeAreaView style={{ flex:1}}>
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItem:'center'
            }}>
                <Text style={{ textAlign:'center'}}>Şuanki Kur Güncelleniyor.</Text>
                <Text style={{ textAlign:'center',fontSize:30}}>{this.state.rate}</Text>
            </View>
        </SafeAreaView>
    }
}
