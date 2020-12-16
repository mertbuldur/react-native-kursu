import React from 'react';
import { ScrollView,View,SafeAreaView,StyleSheet,Text,Image,TextInput,TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Formik } from 'formik';
import * as  Yup from 'yup';
import {inject, observer} from "mobx-react";
@inject('MainStore','SecondStore')
@observer
export default  class Login extends React.Component
{
    constructor() {
        super();
        this.state = {
            hidePassword: true
        }
    }


    _handleSubmit = () => {
        alert('Form Post Edildi');
    };

    render() {
        return (
            <SafeAreaView style={style.body}>
                <ScrollView>
                    <View style={style.header}>
                        <Text style={style.title}>Sign In</Text>
                        <Text>{this.props.SecondStore.fullName}</Text>
                        <TouchableOpacity onPress={()=>this.props.SecondStore.setData('Ali','Veli')}>
                            <Text>Ali Veli</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.SecondStore.setData('Ahmet','Mehmet')}>
                            <Text>Ahmet Mehmet</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.logo_area}>
                        <Image style={{ width:80,height:116}} resizeMethod={"contain"} source={require('../../../assets/images/home.png')} />
                    </View>
                    <View style={style.board}>
                        <Formik
                            initialValues={{
                                username:'',
                                password:''
                            }}
                            onSubmit={this._handleSubmit}
                            validationSchema={Yup.object().shape({
                                username:Yup.string().required("Username Gereklidir."),
                                password:Yup.string().required("Şifre Gereklidir.")
                            })}
                        >
                            {({
                                  values,
                                  handleSubmit,
                                  isValid,
                                  isSubmitting,
                                  errors,
                                  handleChange
                            }) => (
                                <View>
                                    <View style={style.item}>
                                        <TextInput
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                            placeholder={"Username"}
                                            style={style.input}/>
                                        {(errors.username) && <Text style={style.alert}>{errors.username}</Text>}
                                    </View>
                                    <View style={style.item}>
                                    <TextInput
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        placeholder={"Password"}
                                        secureTextEntry={this.state.hidePassword}
                                        style={style.input}/>
                                    <TouchableOpacity onPress={()=>this.setState({hidePassword:!this.state.hidePassword })} style={{position: 'absolute', right: 10, top: 15}}>
                                        <Icon name={(this.state.hidePassword) ? "eye-slash" : 'eye'} size={20} />
                                    </TouchableOpacity>
                                        {(errors.password) && <Text style={style.alert}>{errors.password}</Text>}
                                </View>
                                    <View style={[style.item, {flexDirection: 'row', justifyContent: 'flex-end'}]}>
                                        <Text style={{color: '#525464', fontSize: 16}}>Forgot your password?</Text>
                                    </View>
                                    <View style={style.item}>
                                        <TouchableOpacity
                                            disabled={!isValid || isSubmitting}
                                            onPress={handleSubmit}
                                            style={[style.button,{backgroundColor: (!isValid || isSubmitting) ? '#ddd' :'#20C3AF' }]}>
                                            <Text style={style.button_text}>Login</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                            }
                        </Formik>

                        <View style={[style.item,{marginBottom:10,justifyContent:'center',alignItems:'center'}]}>
                            <Text style={{ color:'#525464'}}>Or</Text>
                        </View>
                        <View style={style.social}>
                            <TouchableOpacity style={style.social_item}>
                                <Icon name={"facebook-f"} color={"#3b5999"} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={style.social_item}>
                                <Icon name={"twitter"} color={"#55acee"} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity style={style.social_item}>
                                <Icon name={"linkedin"} color={"#0077B5"} size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={[style.item]}>
                            <TouchableOpacity style={{ justifyContent:'center',alignItems:'center'}}>
                                <Text style={{ fontSize:17,fontWeight:'500',color:'#525464'}}>Don’t have an account? <Text style={{ color:'#FFB19D',fontWeight:'700'}}>Sign Up</Text></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const style = StyleSheet.create({
    body:{ backgroundColor:'white',flex:1},
    header:{ padding:15,justifyContent:'center',alignItems:'center'},
    title:{fontWeight:'500',fontSize:20,color:'#525464'},
    logo_area:{ alignItems: 'center',marginTop:40},
    board:{ marginTop: 30,paddingHorizontal:30},
    item:{marginBottom:20},
    input:{borderWidth:1,borderColor:'#B0B0C3',backgroundColor: '#F7F7F7',paddingVertical:10,paddingHorizontal:30,height:50},
    button:{
        backgroundColor:'#20C3AF',
        paddingVertical:20,
        justifyContent: 'center',
        alignItems:'center'
    },
    button_text:{textAlign:'center',color:'white',fontSize:17,fontWeight:'700'},
    social:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:15,
    },
    social_item:{
        padding:10,
        width:100,
        height:60,
        borderWidth:1,
        borderColor:'#E2E2E0',
        justifyContent:'center',
        alignItems:'center'
    },
    alert:{ color:'red',fontSize:15}
})
