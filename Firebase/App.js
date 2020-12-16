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
    Platform,
    TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { BannerAd,BannerAdSize,TestIds} from "@react-native-firebase/admob";
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
const BannerCode = (Platform.OS == 'android') ? '' : '';
export default class App extends React.Component
{




  sendNotification = () => {
    PushNotification.localNotification({
      title: "Bu Bir bildirim Başlıgı", // (optional)
      message: "Bu bir Bildirim Mesajı", // (required)
    });
  };

  render(){
      return <SafeAreaView>
            <TouchableOpacity onPress={this.sendNotification}>
              <Text>Send Notification</Text>
            </TouchableOpacity>
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.SMART_BANNER}
          onAdFailedToLoad={(e)=>console.log(e)}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}/>
      </SafeAreaView>
    }
}
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  /*
  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },
    */
  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: Platform.OS === 'ios',
});
