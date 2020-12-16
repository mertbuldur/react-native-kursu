import React from 'react';
import { View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
export default class index extends React.Component
{
    render() {
        return <LinearGradient
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            colors={['#fd0000','#a03737']} style={{ padding:10,marginTop:30,height:150}}>

               </LinearGradient>
    }
}
