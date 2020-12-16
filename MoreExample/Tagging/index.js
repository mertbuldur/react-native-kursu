import React from 'react';
import { SafeAreaView } from 'react-native';
import TagInput from 'react-native-tags-input';
export default class index extends React.Component
{
    constructor() {
        super();
        this.state = {
            tags:{tag:'',tagsArray:[] }
        }
    }

    updateTagState = (state) => {
        this.setState({
            tags:state
        })
    }

    render() {
        return <SafeAreaView>
           <TagInput
               placeholder={"Etiketler..."}
               label={"Etiket Giriniz"}
               labelStyle={{ color:'black'}}

               inputContainerStyle={{
                   borderWidth:1,
                   borderRadius:5,
                   borderColor:'#ccc',
                   marginTop:10,

               }}
               updateState={this.updateTagState}
               tags={this.state.tags}
               tagStyle={{
                   backgroundColor:'white',
                   borderWidth:1,
                   borderColor:'#ddd',
               }}
               tagTextStyle={{ color:'red'}}
               keysForTag={","}
           />
        </SafeAreaView>
    }
}
