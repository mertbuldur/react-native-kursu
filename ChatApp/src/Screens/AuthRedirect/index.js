import React, {Component} from 'react';
import {View,Text } from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class Index extends Component {



    componentDidMount() {
        const user = firebase.auth().currentUser;
        if (user) {
            this.props.navigation.navigate('App');
        }
        else
        {
           this.props.navigation.navigate('Auth');
        }
    }

    render() {
        return (
            <View>

            </View>
        );
    }
}

