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
  Platform,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {requestNotifications,check,PERMISSIONS,checkMultiple,request,requestMultiple,openSettings,checkNotifications} from 'react-native-permissions';
export default class App extends React.Component
{

    componentDidMount() {
      // UNAVAILABLE  => CİHAZDA MEVCUT DEGİL
      // DENIED => İZİN İSTENMEDİ / REDDEDİLDİ
      // GRANTED => İZİN VERİLDİ
      // BLOCKED => İZİN REDDEDİLDİ ARTIK TALEP EDİLEMEZ.
      requestNotifications(['alert','sound']).then(({ status , settings}) => {
        console.log(status,settings)
      })

      checkNotifications().then(({ status , settings})=>{
        console.log(status,settings);
      })



      /* Open Settings */
      /*
      check(Platform.select({
        android:PERMISSIONS.ANDROID.CAMERA,
        ios:PERMISSIONS.IOS.CAMERA
      }))
          .then((res)=>{
             if(res == 'blocked'){
               openSettings().catch((e)=>alert(e));
             }
          })
          .catch((e)=>console.log(e));

      */
      /* Request */
      /*
      const CameraPermissions = Platform.select({
        android:PERMISSIONS.ANDROID.CAMERA,
        ios:PERMISSIONS.IOS.CAMERA
      });
      const MicrophonePermissions = Platform.select({
        android:PERMISSIONS.ANDROID.RECORD_AUDIO,
        ios:PERMISSIONS.IOS.MICROPHONE
      });
      requestMultiple([CameraPermissions,MicrophonePermissions]).then((status)=>{
          console.log('Kamera',status[CameraPermissions]);
          console.log('Microphone',status[MicrophonePermissions]);
      });
      */

      /*
      request(CameraPermissions).then((result)=>{
        if(result == 'granted'){
          alert('izin Verildi');
        }
      })
       */

      /* Check */
      /*
      const CameraPermissions = Platform.select({
            android:PERMISSIONS.ANDROID.CAMERA,
            ios:PERMISSIONS.IOS.CAMERA
          });
      const MicrophonePermissions = Platform.select({
        android:PERMISSIONS.ANDROID.RECORD_AUDIO,
        ios:PERMISSIONS.IOS.MICROPHONE
      });
      checkMultiple([CameraPermissions,MicrophonePermissions])
          .then((status)=>{
            console.log('Camera',status[CameraPermissions]);
            console.log('Microphone',status[MicrophonePermissions]);
          })
      */

      /*
      check(Platform.select({
        android:PERMISSIONS.ANDROID.CAMERA,
        ios:PERMISSIONS.IOS.CAMERA
      }))
          .then((res)=>{
            console.log(res);
          })
          .catch((e)=>console.log(e));
      */


    }

  render() {
      return <View></View>
    }
}
