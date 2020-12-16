import React from 'react';
import { View , Text , TouchableOpacity ,SafeAreaView , TouchableWithoutFeedback , StyleSheet} from 'react-native';
//import Modal from 'react-native-modal';
import Modal from "react-native-modalbox";
export default class index extends React.Component
{
    constructor() {
        super();
        this.state = {
            modalVisible:false
        }
    }

    render(){
        return <SafeAreaView style={{ flex:1}}>
                <TouchableOpacity onPress={()=>this.refs.modal1.open()}>
                    <Text>Open Modal</Text>
                </TouchableOpacity>



                <Modal
                    swipeToClose={true}
                    onClosed={()=>alert('kapandı')}
                    onOpened={()=>alert('açıldı')}
                    style={[styles.modal,styles.modal2]}
                    position={"top"}
                    backdrop={false}
                    isDisabled={false}
                    entry={"top"}
                    ref={"modal1"}>
                        <Text>Burası Modal</Text>
                    <TouchableOpacity onPress={()=>this.refs.modal1.close()}>
                        <Text>Close Modal</Text>
                    </TouchableOpacity>
                </Modal>
            </SafeAreaView>
    }
    /*
    render(){
        return <SafeAreaView>
            <TouchableOpacity onPress={()=>this.setState({ modalVisible:true})}>
                <Text>Show Modal</Text>
            </TouchableOpacity>

            <Modal
                hasBackDrop={true}
                backdropOpacity={1}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={1000}
                onBackButtonPress={()=>alert('geri gitti')}
                onBackdropPress={()=>this.setState({ modalVisible:false})}
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                customBackdrop={<TouchableWithoutFeedback onPress={()=>this.setState({ modalVisible:false})}><View style={{ flex:1,backgroundColor:'blue'}}/></TouchableWithoutFeedback>}
                isVisible={this.state.modalVisible}>

                    <TouchableOpacity onPress={()=>this.setState({ modalVisible:false})}>
                        <Text>Hide Modal</Text>
                    </TouchableOpacity>

            </Modal>

        </SafeAreaView>
    }

     */
}

const styles = StyleSheet.create({
    modal:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    modal2:{
        height:200,
        backgroundColor: 'blue'
    }
})
