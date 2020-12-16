import React from 'react';
import { SafeAreaView, View,Text,TextInput,TouchableOpacity } from 'react-native';
import io from 'socket.io-client/dist/socket.io';
const socket = io("http://localhost:3001",{
  jsonp:false,
  reconnection:true,
  reconnectionDelay:100,
  reconnectionAttempts:10000,
  transports:["websocket"]
});
import axios from 'axios';
export default class App extends React.Component
{

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      number:0,
      result:0,
      type:0,
      currencyName:'Dolar'
    }
  }

  getData = () => {
    axios.get(`https://finans.truncgil.com/today.json`).then((result)=>{
      this.setState({ data : result.data})
    })
  };

  componentDidMount() {

    socket.on('update-currency-app',()=>{
      console.log('Veriler Geliyor Bekleyin !!');
      this.getData();
    });

   this.getData();
  }

  exchange = () => {
    const { data , type } = this.state;
    const euro = data['EURO'];
    const dolar = data['ABD DOLARI'];
    let calculate = 0;
    let currencyName = 'Dolar';
    switch (type) {
      case 0:
         calculate = this.state.number / dolar['Alış'];
         currencyName = 'Dolar';
        break;

      case 1:
         calculate = this.state.number / euro['Alış'];
         currencyName = 'Euro';
        break;

      default:
         calculate = this.state.number / dolar['Alış'];
         currencyName = 'Dolar';
        break;
    }

    this.setState({result:calculate.toFixed(2),currencyName})


  };

  render(){
    return <SafeAreaView style={{ flex:1}}>
        <View style={{
          flex:1,
          justifyContent:'center',
          alignItem:'center',
          paddingHorizontal:10
        }}>
          <Text style={{textAlign:'center',marginBottom:30}}>{this.state.data['Güncelleme Tarihi']}</Text>
          <View style={{ marginBottom:20,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>this.setState({ type: 0})} style={{padding:10,backgroundColor:(this.state.type == 0) ? 'blue' : '#ccc'}}>
              <Text style={{ color:'white'}}>Dolar</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>this.setState({ type: 1})} style={{padding:10,backgroundColor:(this.state.type == 1) ? 'blue' : '#ccc'}}>
              <Text style={{ color:'white'}}>Euro</Text>
            </TouchableOpacity>
          </View>

          {this.state.result != 0 &&
          <Text style={{fontSize: 18, marginBottom: 10, textAlign: 'center'}}>{this.state.number} TL =>
            {this.state.result} {this.state.currencyName} </Text>
          }
          <TextInput
              value={String(this.state.number)}
              onChangeText={(number) => this.setState({ number})}
              keyboardType={"number-pad"}
              style={{ borderRadius:5,height:50,borderColor:'#ccc',borderWidth:1,padding:5}} />
          <TouchableOpacity onPress={this.exchange}>
            <Text>Dönüştür</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  }
}
