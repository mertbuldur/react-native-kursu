/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
  Platform
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Geolocation from "@react-native-community/geolocation";
import  { PROVIDER_GOOGLE,Marker,Polygon,Circle } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import MapView from "react-native-map-clustering";
export default class  App extends React.Component
{

  constructor(props) {
    super(props);
    this.state = {
      latitude:'',
      longitude:'',
      loading:true
    }
  }


  componentDidMount = async () =>  {
    if(Platform.OS == 'android'){
      const response = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
        'title':'MapsAndGeo',
        'message':'Konumunuzu istiyoruz'
      });

    }
    else
    {
        Geolocation.requestAuthorization();
    }
    /*
    Geolocation.getCurrentPosition(
        position => {
          const { coords:{latitude,longitude} } = position;
          this.setState({ latitude,longitude});
        },
        error => {
          console.log(error);
        }
    );

     */

    /*
    this.watchId = Geolocation.watchPosition(
        position => {
          const { coords : { latitude,longitude}} = position;
          this.setState({ latitude,longitude,loading:true})
        },
        error => {
          console.log(error);
        }
    );

   */


  }

  _stop = () => {
    Geolocation.stopObserving();
  };

  componentWillUnmount = ()  => {
    Geolocation.clearWatch(this.watchId);
  }

  render() {
    const { latitude,longitude , loading} = this.state;
    console.log(latitude,longitude)
    return <View style={styles.container}>
      {(loading) ?
          <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: 41.076902,
                longitude: 28.751460,
                latitudeDelta: 0.515,
                longitudeDelta: 0.0121,
              }}

          >
            <Marker coordinate={{latitude: 41.076902, longitude:28.75146}}/>
            <Marker coordinate={{latitude: 41.068606, longitude:28.760481}}/>
            <Marker coordinate={{latitude: 41.076905, longitude:28.65142}}/>
          </MapView>
          :
          <View><Text>Konum Alınıyor...</Text></View>

      }

    </View>
  }
}
/* Direction */
/*
 render() {
    const { latitude,longitude , loading} = this.state;
    console.log(latitude,longitude)
    return <View style={styles.container}>
      {(loading) ?
          <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: 41.076902,
                longitude: 28.751460,
                latitudeDelta: 0.515,
                longitudeDelta: 0.0121,
              }}

          ><MapViewDirections
              origin={{latitude: 37.3318456, longitude: -122.0296002}}
              destination={{latitude: 37.771707, longitude: -122.4053769}}
              apikey={""}
          />
            <Marker coordinate={{latitude: 41.076902, longitude:28.75146}}/>
            <Marker coordinate={{latitude: 41.068606, longitude:28.760481}}/>
            <Marker coordinate={{latitude: 41.076905, longitude:28.65142}}/>
          </MapView>
          :
          <View><Text>Konum Alınıyor...</Text></View>

      }

    </View>
  }
 */
/* Marker */
/*
 return <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 41.0538538,
              longitude: 28.8056053,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
        >
          <Marker
              draggable={true}
              onPress={()=>alert('Marker Tıklandı')}
              onDrag={()=>alert('kaydırma')}
              onDragEnd={()=>alert('kayıdrma')}
              title={"212"}
              description={"Avm"}
              pinColor={"blue"}
              opacity={0.5}
              coordinate={{
            latitude: 41.0477744,
            longitude: 28.8117198,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }} />
        </MapView>
    </View>
 */

/* Polygon */
/*
 return <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 41.0538538,
              longitude: 28.8056053,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
        >
          <Polygon
              onPress={()=>alert('Tıklandı')}
              strokeWidth={3}
              strokeColor={"red"}
              fillColor={"yellow"}
              tappable={true}
              coordinates={[
            {latitude:41.051873, longitude:28.809529},
            {latitude:41.050525, longitude:28.809171},
            {latitude:41.051896, longitude:28.812319},

          ]}/>
        </MapView>
    </View>
 */

/* Circle */
/*
 return <View style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 41.0538538,
              longitude: 28.8056053,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
        >
          <Circle
            strokeWidth={3}
            strokeColor={"red"}
            radius={100}
            fillColor={"yellow"}
            lineCap={"butt"}
            center={{latitude:41.051873, longitude:28.809529}}
          />
        </MapView>
    </View>
 */

/* Dragable Marker */
/*
 return <View style={styles.container}>
      <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 41.0538538,
            longitude: 28.8056053,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
      >
        <Marker
            draggable={true}
            onDrag={(e)=>console.log(e.nativeEvent.coordinate)}
            onDragStart={(e)=>console.log(`start: ${e.nativeEvent.coordinate}`)}
            onDragEnd={(e)=>alert(e.nativeEvent.coordinate.latitude)}
            title={"212"}
            description={"Avm"}
            coordinate={{
              latitude: 41.0477744,
              longitude: 28.8117198,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}/>
      </MapView>
    </View>
 */

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
