import React from 'react';
import {SafeAreaView ,Linking, View , Text , TouchableOpacity} from  'react-native';
import Share from 'react-native-share';
export default class index extends React.Component
{

    share = () => {
        const message = `Böyle bir uygulama gördüm çok güzel sende denesene ? \n AppStore: \n Android: \n`
        Share.open({
            message,
            forceDialog:true
        }).then(e=>console.log(e))
            .catch(e=>console.log(e))
    };

    support = () => {
      //Linking.openURL("mailto:info@mertbuldur.com?subject=Destek")
        Linking.openURL("https://mertbuldur.com")
    };

    render() {
        return <SafeAreaView>
                    <TouchableOpacity onPress={this.share}>
                        <Text>Paylaş</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.support}>
                        <Text>Destek</Text>
                    </TouchableOpacity>
              </SafeAreaView>
    }
}
