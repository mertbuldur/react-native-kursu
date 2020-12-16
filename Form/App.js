import React from 'react';
import Route from './src/Route';
import AsyncStorage from "@react-native-async-storage/async-storage";
import STORE from './src/Store';
import {Provider} from "mobx-react";

export default class App extends React.Component
{

      componentDidMount  = async  () =>  {
          /*
          AsyncStorage.setItem('application_name',JSON.stringify(['a','b','c']));

          AsyncStorage.getItem('application_name').then((res) => {
              console.log(res);
            })


          const application_name = await AsyncStorage.getItem('application_name');
          console.log(JSON.parse(application_name));
          */
          console.log(MainStore.getName());
      }

      render() {
          return <Provider {...STORE}><Route/></Provider>
      }
}
