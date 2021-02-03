import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import {inject} from 'mobx-react';
import {API_URL} from '../../config/system';
import axios from 'axios';
import  * as Yup from 'yup';
import { Formik  } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome5';
@inject("AuthenticateStore")
export default  class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            loading:false
        };
    }

    _handleSubmit = (values) => {
      axios.post(`${API_URL}/api/data/create`,{
          ...values,
          token:this.props.AuthenticateStore.token
      }).then((res)=>{
          if(res.data.success){
              alert('Not is Added.');
              this.props.navigation.goBack();
          }
          else
          {
              alert(res.data.message);
          }
      }).catch((e)=> { console.log(e); alert('Network Error'); } )
    };


    render() {
        const { loading , data } = this.state;
        return (
            <SafeAreaView>
                {
                    loading ? <Text>Yükleniyor</Text> :
                        <View style={style.container}>
                            <Formik
                                initialValues={{
                                    name:'',
                                    text:''
                                }}
                                onSubmit={this._handleSubmit}
                                validationSchema={Yup.object().shape({
                                    name:Yup.string().required('Name is Required'),
                                    text:Yup.string().required('Note is Required'),
                                })}
                            >
                                {({
                                      values,
                                      handleChange,
                                      errors,
                                      isValid,
                                      touched,
                                      isSubmitting,
                                      handleSubmit,
                                      setFieldTouched
                                  }) => (
                                    <View>
                                        <View style={style.form_item}>
                                            <Text style={style.form_title}>Name *</Text>
                                            <TextInput  onChangeText={handleChange("name")}
                                                        value={values.name}
                                                        onBlur={() => setFieldTouched("name")}
                                                        style={style.input}
                                            />
                                            { (errors.email && touched.email) && <Text style={{ padding:5,fontSize:13,marginTop:2,color:'red'}}>{errors.name}</Text>}
                                        </View>
                                        <View style={style.form_item}>
                                            <Text style={style.form_title}>Note *</Text>
                                            <TextInput  onChangeText={handleChange("text")}
                                                        value={values.text}
                                                        onBlur={() => setFieldTouched("text")}
                                                        style={style.input}
                                            />
                                            { (errors.text && touched.text) && <Text style={{ padding:5,fontSize:13,marginTop:2,color:'red'}}>{errors.text}</Text>}
                                        </View>


                                        <View style={style.form_item}>
                                            <TouchableOpacity
                                                onPress={handleSubmit}
                                                disabled={!isValid || isSubmitting}
                                                style={style.button}>
                                                <Text style={style.color_white}>Create</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                                }
                            </Formik>
                        </View>
                }

            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({

    menu:{
        marginTop: 40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    form:{
        marginTop:50
    },
    form_item:{
        marginBottom:20
    },
    input:{
        padding:15,
        borderWidth:1,
        borderColor:'#5E656F',
        borderRadius:5,
        color:'black'
    },
    form_title:{
        color:'#9CA5B4',
        marginBottom: 10,
    },
    button:{
        padding:20,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#0071DF',
        borderRadius: 5
    },
    color_white:{
        color:'white',
        fontWeight:'700'
    },

    container:{
        padding:10
    }
});
