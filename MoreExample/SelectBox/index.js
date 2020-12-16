import React from 'react';
import { SafeAreaView , Text , View } from 'react-native';
import Select2 from "react-native-select-two";
export default class index extends React.Component
{
    render() {
        const Data = [
            {id:1,name:'Back End Developer',checked:true},
            {id:2,name:'Frond End Developer'},
            {id:3,name:'Full Stack  Developer'},
        ]
        return <SafeAreaView>
            <Select2
                isSelectSingle={true}
                colorTheme={"blue"}
                popupTitle={"Pozisyon Seçiniz"}
                title={"Pozisyon Seçiniz"}
                style={{ marginTop:150}}
                onSelect={data => {
                    console.log(data);
                }}
                onRemoveItem={data => {
                    console.log('remove'+ data);
                }}
                cancelButtonText={"İptal"}
                selectButtonText={"Seç"}
                searchPlaceHolderText={"Arama"}
                data={Data}
                listEmptyTitle={"Veri Yok"}
            />
        </SafeAreaView>
    }
}
