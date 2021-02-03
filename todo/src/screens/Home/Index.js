import React, {Component} from 'react';
import { View ,Text,TouchableOpacity , SafeAreaView ,FlatList} from 'react-native';
import {inject} from 'mobx-react';
import {API_URL} from '../../config/system';
import axios from 'axios';
import NoteList from '../../components/NoteList';
@inject("AuthenticateStore")
export default  class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            loading:true
        };
    }
    static navigationOptions = ({ navigation }) => {

        return {
            title:'mNote',
            headerLeft: (<TouchableOpacity style={{padding:5,marginLeft:5}} onPress={navigation.getParam("logout")}>
                <Text>Logout</Text>
            </TouchableOpacity>),
            headerRight:(<TouchableOpacity onPress={() => navigation.navigate('Create')} style={{ padding:5,marginRight:10}}><Text>New</Text></TouchableOpacity>)
        }
    }

    getData = () => {
        axios.get(`${API_URL}/api/data/list/${this.props.AuthenticateStore.token}`).then((res) => {
            this.setState({
                data:res.data.data.data,
                loading:false
            })
        });
    };

    componentDidMount = () => {
        this.props.navigation.setParams({ logout: () => this.props.AuthenticateStore.removeToken()});

        this.props.navigation.addListener('willFocus',() => {
           this.getData();
        })
    }
    renderItem = ({ item }) => {
        return <NoteList item={item} />
    }
    render() {
        const { loading , data } = this.state;

        return (
            <SafeAreaView>
                {
                    loading ? <Text>Yükleniyor</Text> :
                        <View>
                            <FlatList
                                style={{ padding:5}}
                                data={data}
                                renderItem={this.renderItem} />
                        </View>
                }

            </SafeAreaView>
        );
    }
}
