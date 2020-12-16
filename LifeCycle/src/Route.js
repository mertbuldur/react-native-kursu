import React from 'react';
import { Image } from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createDrawerNavigator} from "react-navigation-drawer";


import Home from './screens/Home';
import Detail from './screens/Detail';
import Drawer from './Components/Drawer';

const HomeStack = createStackNavigator({
    Home: {
        screen:Home,
        navigationOptions:{
            title:'Anasayfa olsun'
        }
    },
    Detail:{ screen:Detail}
});

const DetailStack = createStackNavigator({
    Detail:{ screen:Detail}
});

const AppBottomNavigator = createBottomTabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Anasayfa',
        }
    },
    Detail: {
        screen:Detail,
        navigationOptions:{
            title:'Detay'
        }
    }
},{
    tabBarOptions:{
        activeTintColor:'#ddd',
        inactiveTintColor:'red'
    }
})


const AppNavigator = createDrawerNavigator({
    Home:AppBottomNavigator
},{
    contentComponent:Drawer
});


export  default createAppContainer(AppNavigator);
