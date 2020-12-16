import React, {Component} from 'react';
import { View,SafeAreaView,Text,TouchableOpacity,StyleSheet,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
export default  class Index extends Component {

    constructor() {
        super();
        this.state = {
            checkbox:false,
            hidePassword:true
        }
    }
    componentDidMount() {

    }
    _handleSubmit = (values) => {
        auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                const user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName:values.name,

                });
                this.props.navigation.navigate('App');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if(error.code === 'auth/weak-password'){
                    alert('Weak Password');
                }
                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    };

    render() {
        return (
            <SafeAreaView style={{ flex:1}}>
                <View style={{ backgroundColor:'white',justifyContent:'center',flex:1,paddingVertical:50,alignItems:'center'}}>
                    <View style={{ alignItems:'center'}}>
                        <Text style={style.hero}>Welcome!</Text>
                        <Text style={style.hero_description}>Please provide following
                            details for your new account</Text>
                    </View>
                    <Formik
                        initialValues={{
                            name:'',
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
                                        value={values.name}
                                        placeholder={"Name"}
                                        onChangeText={handleChange('name')}
                                        placeholderTextColor={"#302D4C"}
                                        style={style.input}/>
                                    {(errors.name) && <Text style={style.error}>{errors.name}</Text>}
                                    <TextInput
                                        value={values.email}
                                        placeholder={"Email"}
                                        keyboardType={"email-address"}
                                        onChangeText={handleChange('email')}
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
                                    <View style={style.checkbox_area}>
                                        <TouchableOpacity
                                            onPress={() => this.setState({checkbox: !this.state.checkbox})}
                                            style={style.checkbox}>
                                            {this.state.checkbox &&
                                            <Text style={{fontSize: 25}}>✓</Text>
                                            }
                                        </TouchableOpacity>
                                        <View style={{marginLeft: 10, flex: 1, flexWrap: 'nowrap'}}>
                                            <Text style={style.checkbox_text}>By creating your account you have to agree
                                                with our Teams and Conditions.</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity
                                        disabled={!isValid || isSubmitting}
                                        onPress={handleSubmit}
                                        style={style.button}>
                                        <Text style={style.button_text}>Sign up my Account</Text>
                                    </TouchableOpacity>

                                    <View style={style.bottom}>
                                        <Text style={{fontSize: 17, color: '#302D4C'}}>Already have an account?
                                            - </Text>
                                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text
                                            style={{fontSize: 17, fontWeight: '600', color: '#302D4C'}}>Sign
                                            In</Text></TouchableOpacity>
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
    hero_description:{
        textAlign: 'center',paddingHorizontal: 40,
        color:'rgba(26,25,57,0.8)',fontSize:17,marginTop:15,fontWeight:'500'},
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
    checkbox_area:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5,
    },
    checkbox:{
        width:34,
        height:34,
        backgroundColor:"rgba(113,101,227,0.2)",
        borderWidth:1,
        borderColor:'#7165E3',
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    },
    checkbox_text :{
        color:'#656379'
    },
    error:{
        color:'red',
    }
})
