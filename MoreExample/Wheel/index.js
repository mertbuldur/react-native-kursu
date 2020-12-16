import React from 'react';
import { SafeAreaView,View,Text,TouchableOpacity} from 'react-native';
import WheelOfFortune from "react-native-wheel-of-fortune";
export default class index extends React.Component
{
    render(){
        return <SafeAreaView style={{ flex:1}}>
            <WheelOfFortune
                onRef = { ref => this.wheelRef = ref}
                rewards={[1,2,3,4,5,6,7,8,9,10]}
                borderWidth={3}
                duration={3000}
                innerRadius={30}
                backgroundColor={"red"}
                knobSize={20}
                textColor={"white"}
                getWinner={(value,index)=>console.log(value,index)}
                />
                <TouchableOpacity onPress={()=>this.wheelRef._onPress()}>
                        <Text>Başlat</Text>
                </TouchableOpacity>
        </SafeAreaView>
    }
}
