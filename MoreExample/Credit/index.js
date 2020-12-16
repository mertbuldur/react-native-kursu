import React from 'react';
import { SafeAreaView,Text} from 'react-native';
import {CreditCardInput} from "react-native-credit-card-input";

export default class index extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            valid:false,
            status:{
                cvc:false,
                expiry:false,
                name:false,
                number:false
            }
        }
    }

    _onChange = (form) =>  {
        console.log(form)
        this.setState({
            valid:form.valid,
            status:{
                cvc:form.status.cvc == 'valid' ? true : false,
                expiry:form.status.expiry == 'valid' ? true : false,
                name:form.status.name == 'valid' ? true : false,
                number:form.status.number == 'valid' ? true : false,
            }
        })
    }

    render(){
        return <SafeAreaView>
            <CreditCardInput
                autoFocus={true}
                placeholders={{
                    number:'Kart Numarası',
                    expiry:'MM/YY',
                    cvc:'Güvenlik Kodu'
                }}
                invalidColor={"blue"}
                validColor={"green"}
                labels={{
                    number:'Kart Numarası',
                    expiry:'MM/YY',
                    cvc:'Cvc',
                    name:'Ad Soyad'
                }}
                requiresName={true}
                placeholderColor={"red"}
                onChange={this._onChange}
            />

            <Text>{(this.state.valid) ? 'Devam Edebilirsin' : 'Devam Edemezsin'}</Text>
            <Text>{(this.state.status.cvc) ? 'cVC Doğru' : 'cvc Yanlış'}</Text>
            <Text>{(this.state.status.expiry) ? 'Tarih Doğru' : 'Tarih Yanlış'}</Text>
            <Text>{(this.state.status.number) ? 'Numara Doğru' : 'Numara Yanlış'}</Text>

        </SafeAreaView>
    }
}
