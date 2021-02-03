/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Router from './src/Router';
import { Provider } from 'mobx-react';
import Store from './src/store/index';
import NavigationService from './src/config/NavigationService';
export default class App extends React.Component
{
  render(){
    return (<Provider {...Store}>
      <View style={{ flex:1}}>
        <Router ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }} />
      </View>
    </Provider>)
  }
}
