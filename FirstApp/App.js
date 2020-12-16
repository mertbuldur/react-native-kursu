/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import ItemList from './ItemList';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            text:'',
            data:[]
        }
    }

    handleSave = () => {
        const { text,data} = this.state;
        data.push({ text});
        this.setState({ data,text:''});

    };

    render(){
      const { text ,data } = this.state;
      return (
          <View style={[{flex:1,paddingTop:30}]}>
                <View style={style.title}><Text style={style.title_text}>To-Do Application</Text></View>
              <View style={{ backgroundColor:'#ccc',padding:10,flexDirection:'row'}}>
                  <TextInput
                        style={style.input}
                        value={text}
                        onChangeText={(text)=>this.setState({ text })}
                    />
                    <TouchableOpacity onPress={this.handleSave} style={style.button}>
                        <Text style={style.title_text}>Ekle</Text>
                    </TouchableOpacity>
              </View>
              <View>
                  { data.map((item) => {
                        return <ItemList text={item.text} />
                    })
                  }
              </View>
          </View>
      )
    }
}

const style  = StyleSheet.create({
  welcome_area:{ backgroundColor:'red',flex:1},
  welcome_text:{ color:'white',fontSize:20},
  title:{ backgroundColor: 'blue',padding:10},
  title_text:{ color:'white',textAlign:'center',fontSize:16,fontWeight:'700'},
  input:{padding:10,backgroundColor:'white',flex:1},
  button:{padding:10,backgroundColor:'blue',borderRadius:5,marginLeft:10}
});


