import React from 'react';
import { SafeAreaView , View , Text, TouchableOpacity} from  'react-native';
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";
export default class index extends React.Component
{
    render() {
        const Options = [
          'Yeni Ekle',
          <Text style={{ fontSize:17,color:'green'}}>Düzenle</Text>,
          'Sil',
          'İptal'
        ];
        return <SafeAreaView>
            <TouchableOpacity onPress={()=>this.ActionSheet.show()}>
                <Text>Open ActionSheet</Text>
            </TouchableOpacity>
            <ActionSheet
                ref={ref => this.ActionSheet = ref}
                title={<Text style={{ fontSize:20,fontWeight:'700'}}>Neleri Seçmek istersin ?</Text>}
                options={Options}
                cancelButtonIndex={3}
                destructiveButtonIndex={2}
                message={"Seçmek istediğine tıkla"}
                onPress={(index)=>{
                    switch (index) {
                        case 0:
                            alert('Yeni Ekle')
                            break;
                        case 1:
                            alert('Düzenle')
                            break;
                        case 2:
                            alert('Sil');
                            break;
                    }
                }}
            />
        </SafeAreaView>
    }
}
