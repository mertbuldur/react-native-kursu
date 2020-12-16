import React from 'react';
import { View , SafeAreaView, Text } from  'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator
}
from 'react-native-indicators';
export default class index extends React.Component
{
    constructor() {
        super();
        this.state = {
            loading:true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading:false})
        },3000)
    }

    render(){
        return <SafeAreaView style={{ flex:1}}>
            {this.state.loading
                ?
                    <WaveIndicator size={150} color={"blue"} />
                :
                    <View><Text>Sayfa Açıldı</Text></View>

            }
        </SafeAreaView>
    }
}
