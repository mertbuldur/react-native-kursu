import React from 'react';
import { Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createDrawerNavigator} from "react-navigation-drawer";

import HomeIndex from './Screens/Home';
import ChatRoomCreate from './Screens/Chat/Create';
import ChatRoomDetail from './Screens/Chat/Detail';



import Login from './Screens/Login';
import Register from './Screens/Register';

import AuthRedirect from './Screens/AuthRedirect'

const AppStack = createStackNavigator({
    HomeIndex:{
        screen:HomeIndex
    },
    ChatRoomCreate:{
        screen:ChatRoomCreate,
        navigationOptions:{
            title:'New Chat Room'
        }
    },
    ChatRoomDetail:{
        screen:ChatRoomDetail,
    }
})

const AuthenticateStack = createStackNavigator({
    Login: {
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    Register:{
        screen:Register,
        navigationOptions:{
            header:null
        }
    }
});

const SwitchNavigator = createSwitchNavigator({
    App:AppStack,
    AuthRedirect,
    Auth:AuthenticateStack
},{
    initialRouteName:'AuthRedirect'
})





export  default createAppContainer(SwitchNavigator);
