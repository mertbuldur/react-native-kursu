import React from 'react';
import { SafeAreaView , View , TouchableOpacity, Text} from 'react-native';
import { Root,Popup , Toast} from 'popup-ui';
export default class index extends React.Component {


    showPopupUI = () => {
        Popup.show({
            type: 'Warning', // Danger | Warning | Success
            title: 'Başarılı',
            button: true,
            textBody: 'İnternete Bağlandınız',
            buttonText: "Kapat",
            background:'red',
            callback: () => Popup.hide()
        });
    };

    showToastUI = () => {
      Toast.show({
          title:'Başarılı',
          text:'İnternete bağlantıdnız',
          color:'#2ecc71',
          timing:2000
      });
    };

    componentDidMount() {

    }

    render(){
        return <Root><SafeAreaView>
            <TouchableOpacity onPress={this.showPopupUI}>
                <Text>Görüntüle</Text>
            </TouchableOpacity>
        </SafeAreaView></Root>
    }
}

