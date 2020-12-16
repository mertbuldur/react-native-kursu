import React, {Component} from 'react';
import { View,SafeAreaView,Text,TouchableOpacity,StyleSheet,TextInput } from 'react-native';
import * as Yup from "yup";
import {Formik} from "formik";
import Icon from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth';
export default  class Index extends Component {

    constructor() {
        super();
        this.state = {
            hidePassword:true
        }
    }
    _handleSubmit = (values) => {
        auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
               this.props.navigation.navigate('App');
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    alert('Wrong Password')
                    return;
                }

                if (error.code === 'auth/user-not-found') {
                  alert('User Not Found');
                  return;
                }

                console.error(error);
            });
    }

    render() {
        return (
            <SafeAreaView style={{ flex:1}}>
                <View style={{ backgroundColor:'white',justifyContent:'center',flex:1,paddingVertical:50,alignItems:'center'}}>
                    <View style={{ alignItems:'center'}}>
                        <Text style={style.hero}>Welcome Back!</Text>
                        <Text style={style.hero_description}>Sign in to continue</Text>
                    </View>
                    <Formik
                        initialValues={{
                            email:'',
                            password:''
                        }}
                        onSubmit={this._handleSubmit}
                        validationSchema={
                            Yup.object().shape({
                                email:Yup.string().email().required('Email address is required'),
                                password:Yup.string().required('Password is Required')
                            })
                        }
                    >
                        {
                            ({
                                 values,
                                 handleSubmit,
                                 isValid,
                                 isSubmitting,
                                 errors,
                                 handleChange
                             }) => (
                                <View style={style.form}>
                                    <TextInput
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        placeholder={"Email"}
                                        keyboardType={"email-address"}
                                        placeholderTextColor={"#302D4C"}
                                        style={style.input}/>
                                    {(errors.email) && <Text style={style.error}>{errors.email}</Text>}
                                    <View>
                                    <TextInput
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        placeholder={"Password"}
                                        placeholderTextColor={"#302D4C"}
                                        secureTextEntry={this.state.hidePassword}
                                        style={style.input}/>
                                      <TouchableOpacity onPress={()=>this.setState({ hidePassword:!this.state.hidePassword})} style={{ position:'absolute',right:15,top:15}}>
                                          <Icon name={(this.state.hidePassword) ? "eye-slash" : 'eye'} size={20} />
                                      </TouchableOpacity>
                                    {(errors.password) && <Text style={style.error}>{errors.password}</Text>}
                                    </View>
                                    <TouchableOpacity style={style.forgot}>
                                        <Text>Forgot Password?</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        disabled={!isValid}
                                        onPress={handleSubmit}
                                        style={style.button}>
                                        <Text style={style.button_text}>Sign in My Account</Text>
                                    </TouchableOpacity>

                                    <View style={style.bottom}>
                                        <Text style={{fontSize: 17, color: '#302D4C'}}>Don’t have an account? - </Text>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('Register')}
                                        ><Text style={{fontSize: 17, fontWeight: '600', color: '#302D4C'}}>Sign
                                            Up</Text></TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                    </Formik>
                </View>
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    hero: { color:'#1C1939',fontWeight:'600',fontSize:40},
    hero_description:{ color:'rgba(26,25,57,0.8)',fontSize:17,marginTop:15,fontWeight:'500'},
    form:{ flex:1,marginTop:80},
    input:{
        backgroundColor:'#F7F7F7',
        padding:15,
        width:300,
        height:50,
        borderRadius:10,
        paddingHorizontal:25,
        marginBottom:10
    },
    forgot:{
        flexDirection:'row',justifyContent:'flex-end',
        marginTop:10,
        color:'#706E83'
    },
    button:{
        backgroundColor: '#7165E3',
        padding:20,
        marginTop:45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center'
    },
    button_text:{
        color:'white',
        fontWeight:'600',
        fontSize:18,
        textAlign:'center'
    },
    bottom:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:20,
    },
    error:{
        color:'red'
    }
})
