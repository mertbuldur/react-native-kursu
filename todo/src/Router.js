import React from 'react';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
/* Loading */
import Loading from '../src/screens/Loading/Index';


/* Authenticate */
import Login from '../src/screens/Authenticate/Login';
import Register from '../src/screens/Authenticate/Register';

/* Home */
import HomeIndex from '../src/screens/Home/Index';
import HomeCreate from '../src/screens/Home/Create';
import HomeDetail from '../src/screens/Home/Detail';

const AuthenticateStack = createStackNavigator({
    Login:{
        screen:Login,
        navigationOptions:{
            headerShown:null
        }
    },
    Register:{
        screen:Register,
        navigationOptions:{
            headerShown:null
        }
    }
});

const HomeStack = createStackNavigator({
    Home:{
        screen:HomeIndex
    },
    Create:{
        screen:HomeCreate
    },
    Detail:{
        screen:HomeDetail
    }
});

const SwitchNavigator = createSwitchNavigator({
    Loading,
    App:HomeStack,
    Auth:AuthenticateStack
},{
    initialRouteName:'Loading'
});

export default createAppContainer(SwitchNavigator)



