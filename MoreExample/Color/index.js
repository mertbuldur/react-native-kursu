import React from 'react';
import { SafeAreaView , Text,View} from  'react-native';
import { ColorPicker} from "react-native-color-picker-light";

export default class index extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            color:''
        }
    }
    // 2fe65a
    componentDidMount() {
        this.setState({ color:'#2fe65a'},() => {
            this.ColorPicker.setColor("#2fe65a")
        });
    }

    render(){
        return <SafeAreaView style={{flex:1}}>
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <ColorPicker
                    ref={ ref => this.ColorPicker = ref}
                    style={{ width:300,height:300}}
                    onColorChange={color =>this.setState({ color })}
                />
                <Text>Color: {this.state.color}</Text>
            </View>
        </SafeAreaView>
    }
}
