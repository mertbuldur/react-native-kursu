import  React from 'react';
import {SafeAreaView , View , Text} from 'react-native';
import { CountdownCircleTimer} from "react-native-countdown-circle-timer";

export default class index extends React.Component
{
    render(){
        return <SafeAreaView style={{ flex:1}}>
            <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
            <CountdownCircleTimer
                isPlaying={true}
                size={180}
                strokeWidth={5}
                duration={15}
                colors={[
                    ['#1b5301',0.5],
                    ['#f3bb00',0.5],
                    ['#f30606',0.5]
                ]}
                onComplete={()=>alert('Süre Tamamlandı')}
            >
                {({ remainingTime}) => <Text style={{ fontSize:50}}>{remainingTime}</Text>}
            </CountdownCircleTimer>
            </View>
        </SafeAreaView>
    }
}
