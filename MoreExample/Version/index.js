import React, {Component} from 'react';
import {View , Text ,SafeAreaView} from 'react-native';
import VersionNumber from "react-native-version-number";


export default class Index extends Component {

    componentDidMount() {
        // kullanicinin version numarası < yeni version numarasından uyarı çıkar.
        // 1.0 -> 1
        // 1.1 -> 2
        console.log(VersionNumber.appVersion);
        console.log(VersionNumber.buildVersion);
        console.log(VersionNumber.bundleIdentifier);
    }

    render() {
        return (
            <SafeAreaView>
                <Text>App Version : {VersionNumber.appVersion}</Text>
                <Text>Build Version : {VersionNumber.buildVersion}</Text>
                <Text>Bundle Identifier : {VersionNumber.bundleIdentifier}</Text>

            </SafeAreaView>
        );
    }
}


