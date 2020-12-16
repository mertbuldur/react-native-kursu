import React from 'react';
import { View , Text,SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
export default class Index extends React.Component
{
    render(){
        return <SafeAreaView>
                <TouchableOpacity onPress={()=>this.RBSheet.open()}>
                    <Text>Open Sheet</Text>
                </TouchableOpacity>
                <RBSheet
                    ref={ref => { this.RBSheet = ref;}}
                    height={200}
                    customStyles={{
                        container:{
                            padding:10
                        }
                    }}
                >
                   <TouchableOpacity style={style.item}>
                      <Text>Yeni Gönderi Paylaş</Text>
                   </TouchableOpacity>
                    <TouchableOpacity style={style.item}>
                        <Text>Yeni Hikaye Paylaş</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.item}>
                        <Text>Yeni Video Paylaş</Text>
                    </TouchableOpacity>
                </RBSheet>
            </SafeAreaView>
    }
}

const style = StyleSheet.create({
    item:{
        padding:15,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})
