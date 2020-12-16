import React from 'react';
import { View , SafeAreaView , Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
export default class index extends React.Component
{
    componentDidMount() {
        /*
        NetInfo.fetch().then(state => {
            if(!state.isConnected){
                alert('Internet Baglantınızı Kontrol Ediniz !');
            }
            console.log('Baglantı Tipi',state.type);
            console.log('Baglı mı ?',state.isConnected)
        })
        */
        this.baglanti = NetInfo.addEventListener(state => {
            if(!state.isConnected){
                alert('Internet Yok');
            }
            else
            {
                alert('Aktif Bir internet Var');
            }
        })
    }



    render(){
        return <SafeAreaView></SafeAreaView>
    }
}
