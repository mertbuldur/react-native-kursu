
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MapView from "react-native-map-clustering";
import { Marker} from "react-native-maps";
import axios from 'axios';
export default class index extends React.Component
{
    constructor() {
        super();
        this.state = {
            events:[],
            loading:true
        }
    }

    componentDidMount() {
        axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`)
            .then((res)=>{
                this.setState({
                    events:res.data.events,
                    loading:false
                })
            })
            .catch((error)=>console.log(error));
    }


    render(){
        const { loading,events } = this.state;
      return <SafeAreaView style={{ flex:1}}>
          {loading
              ?
              <View style={{ justifyContent:'center',flex:1,alignItems:'center'}}><Text>Yükleniyor...</Text></View>
              :
              <MapView
                  initialRegion={{
                      latitude: 52.5,
                      longitude: 19.2,
                      latitudeDelta: 8.5,
                      longitudeDelta: 8.5,
                  }}
                  style={{
                      flex:1,
                      height: '100%'
                  }}
              >
                  {
                      events.map( item => {
                          console.log(typeof item.geometries[0].coordinates[0]);
                          if(typeof item.geometries[0].coordinates[0] !== 'object') {
                              return <Marker
                                  title={item.title}
                                  description={item.description}
                                  coordinate={{
                                  latitude: item.geometries[0].coordinates[1],
                                  longitude: item.geometries[0].coordinates[0]
                              }}>
                                  <View style={{width:36,height:36,backgroundColor:'blue',justifyContent:'center',alignItems:'center',borderRadius:50}}>
                                      <Text style={{ fontSize:20}}>🔥</Text>
                                  </View>
                              </Marker>
                          }
                      })
                  }


              </MapView>
          }
      </SafeAreaView>
    }
}
