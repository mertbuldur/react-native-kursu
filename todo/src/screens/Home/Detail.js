import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet, TextInput} from 'react-native';
import {inject} from 'mobx-react';
import {API_URL} from '../../config/system';
import axios from 'axios';
import NoteList from '../../components/NoteList';
import CommentList from '../../components/CommentList';
import * as Yup from 'yup';
import {Formik} from 'formik';
@inject("AuthenticateStore")
export default  class Detail extends Component {

    static navigationOptions = ({ navigation }) => {

        return {
            title:navigation.getParam("title"),
            headerRight:(
                <View style={{ marginRight:10,flexDirection: 'row',alignItems:'center'}}>
                    <TouchableOpacity onPress={navigation.getParam("editPopup")} style={{ marginRight:5}}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigation.getParam("handleDelete")} >
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            data:[],
            comments:[],
            loading:true,
            text:'',
            openEditShow:false
        };
    }

    getData = () => {
        axios.get(`${API_URL}/api/data/detail/${this.props.AuthenticateStore.token}/${this.props.navigation.getParam("id")}`).then((res) => {
            this.props.navigation.setParams({ title: res.data.data.data.name});
            this.setState({
                data:res.data.data.data,
                comments:res.data.data.comments,
                loading:false
            })
        });
    };

    handleDelete = () => {
        const { data } = this.state;
        axios.post(`${API_URL}/api/data/delete`,{
            id:data.id,
            token:this.props.AuthenticateStore.token
        }).then((res)=>{
            if(!res.data.success){
                alert(res.data.message);
            }
            this.props.navigation.goBack();
        })
    };

    componentDidMount = () => {
        this.getData();
        this.props.navigation.setParams({
            handleDelete: this.handleDelete,
            editPopup:() => this.setState({ openEditShow:true})
        })
    }

    renderItem = ({ item }) => {
        return <CommentList handleCommentDelete={this.handleCommentDelete} item={item} />
    }

    handleCommentSubmit = () => {
        const { text } = this.state;
        if(text != ''){
            axios.post(`${API_URL}/api/comment/create`,{
                token:this.props.AuthenticateStore.token,
                dataId:this.props.navigation.getParam("id"),
                text
            }).then((res)=>{
                this.setState({ text : ''},() => {
                    this.getData();
                })
            }).catch((e)=>{
                console.log(e);
                alert('Network Error');
            })
        }
        else
        {
            alert('Text is Required');
        }
    }

    handleCommentDelete = (id) => {

        axios.post(`${API_URL}/api/comment/delete`,{
            id,
            token:this.props.AuthenticateStore.token
        }).then((res)=>{
            if(!res.data.success){
                alert(res.data.message);
                return;
            }
            this.getData();
        })
    };

    _handleSubmitUpdate = (values) => {
        const { data } = this.state;
        axios.post(`${API_URL}/api/data/update`,{
            id:data.id,
            ...values,
            token:this.props.AuthenticateStore.token
        }).then((res)=>{
            if(!res.data.success){
                alert(res.data.message);
                return;
            }
            this.setState({ openEditShow:false},() => {
                this.getData();
            })

        })
    };

    render() {
        const { loading , data , comments , text , openEditShow } = this.state;

        return (
            <SafeAreaView>
                {
                    loading ? <Text>Yükleniyor</Text> :
                        <View>
                            <View style={style.container}>
                                <Text style={{ textAlign:'center'}}>{data.text}</Text>
                                {openEditShow &&
                                <View>
                                    <Formik
                                        initialValues={{
                                            name: data.name,
                                            text: data.text
                                        }}
                                        onSubmit={this._handleSubmitUpdate}
                                        validationSchema={Yup.object().shape({
                                            name: Yup.string().required('Name is Required'),
                                            text: Yup.string().required('Note is Required'),
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
                                                    <TextInput onChangeText={handleChange("name")}
                                                               value={values.name}
                                                               onBlur={() => setFieldTouched("name")}
                                                               style={style.input}
                                                    />
                                                    {(errors.email && touched.email) && <Text style={{
                                                        padding: 5,
                                                        fontSize: 13,
                                                        marginTop: 2,
                                                        color: 'red'
                                                    }}>{errors.name}</Text>}
                                                </View>
                                                <View style={style.form_item}>
                                                    <Text style={style.form_title}>Note *</Text>
                                                    <TextInput onChangeText={handleChange("text")}
                                                               value={values.text}
                                                               onBlur={() => setFieldTouched("text")}
                                                               style={style.input}
                                                    />
                                                    {(errors.text && touched.text) && <Text style={{
                                                        padding: 5,
                                                        fontSize: 13,
                                                        marginTop: 2,
                                                        color: 'red'
                                                    }}>{errors.text}</Text>}
                                                </View>


                                                <View style={style.form_item}>
                                                    <TouchableOpacity
                                                        onPress={handleSubmit}
                                                        disabled={!isValid || isSubmitting}
                                                        style={style.button}>
                                                        <Text style={style.color_white}>Update</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={style.form_item}>
                                                    <TouchableOpacity onPress={() => this.setState({ openEditShow:false})}>
                                                        <Text>Close</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )
                                        }
                                    </Formik>
                                </View>
                                }
                                <View style={{ marginTop:5,flexDirection:'row'}}>
                                    <TextInput  placeholder={"Comment area"} value={text} onChangeText={(text) => this.setState({ text })} style={[style.input,{ flex:1}]}/>
                                    <TouchableOpacity onPress={this.handleCommentSubmit} style={{ marginLeft:5,padding:10,backgroundColor:'green'}}><Text style={{ fontSize:18,color:'white'}}>+</Text></TouchableOpacity>
                                </View>
                            <FlatList
                                style={{ marginTop:5}}
                                data={comments}
                                renderItem={this.renderItem} />
                            </View>
                        </View>
                }

            </SafeAreaView>
        );
    }
}
const style = StyleSheet.create({
    container: {
        padding:10
    },
    input:{
        padding:10,
        borderWidth:1,
        borderColor:'#ccc',
        color:'black',

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

})


