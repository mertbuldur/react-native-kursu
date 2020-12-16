import React from 'react';
import { SafeAreaView , View , Text} from 'react-native';
import * as Progress from 'react-native-progress';
export default class index extends React.Component
{
    render() {
        return <SafeAreaView style={{flex:1}}>
            <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
                <Progress.Bar
                progress={0.5}
                width={200}
                color={"red"}
                unfilledColor={"blue"}
                borderWidth={3}
                borderColor={"black"}
                height={20}
                />

                <Progress.Circle
                    color={"red"}
                    unfilledColor={"blue"}
                    size={120}
                    fill={"black"}
                    progress={0.4}
                    indeterminate={true}
                    indeterminateAnimationDuration={5000}
                />

                <Progress.Pie
                    color={"red"}
                    unfilledColor={"blue"}
                    fill={"black"}
                    progress={0.4}
                    indeterminate={true}
                    indeterminateAnimationDuration={5000}
                    size={120} />

                <Progress.CircleSnail
                    color={["red","blue","green"]}
                    unfilledColor={"blue"}
                    fill={"black"}
                    progress={0.4}
                    spinDuration={6000}
                    size={120} />
            </View>

        </SafeAreaView>
    }
}
