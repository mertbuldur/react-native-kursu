import React, {Component} from 'react';
import { View,Text } from 'react-native';
import {inject} from 'mobx-react';
@inject("AuthenticateStore")
export default  class Loading extends Component {

    componentDidMount() {
       this.props.AuthenticateStore.getToken();
    }

    render() {
        return (
            <View>
                <Text>asd</Text>
            </View>
        );
    }
}
