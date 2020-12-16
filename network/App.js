
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import Item from "./Item";
export default class App extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            loading:true,
            isRefresh:false,
            page:1
        }
    }

    componentDidMount() {
       this.fetchUser();
    }

    fetchUser(page = 1,isLoadMore = false){
        this.setState({ loading:true})
        setTimeout(() => {
            const url = `https://api.stackexchange.com/2.2/users?page=${page}&order=desc&sort=reputation&site=stackoverflow`
            axios.get(url).then((res) => {
                const {data} = this.state;

                let newData = (isLoadMore) ? data.concat(res.data.items) : res.data.items;
                this.setState({
                    page,
                    data: newData,
                    loading: false,
                    isRefresh: false
                })
            })
                .catch((e) => alert(e))
        },1000);
    }

    _renderItem = ({item}) => {
        return <Item item={item}/>
    }

    onRefresh = () => {
        this.setState({ isRefresh:true});
        this.fetchUser();
    }

    loadMore = () => {
        const { page } = this.state;
        var newPage = page +1;
        this.fetchUser(newPage,true);
    }

    renderFooter = () => {
        if(!this.state.loading) return null;
        return <ActivityIndicator style={{ color:'red'}} />
    }



    render(){
        const { data , loading,isRefresh } = this.state;
      return(<SafeAreaView>
              <View style={{ padding:15,backgroundColor:'#009688',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{ fontSize:20,color:'white',fontWeight:'600'}}>mUserList</Text>
              </View>
              <FlatList
                      style={{padding:10,backgroundColor:'#f5f5f5'}}
                      data={data}
                      numColumns={1}
                      refreshControl={
                          <RefreshControl
                            refreshing={isRefresh}
                            onRefresh={this.onRefresh}
                          />
                      }
                      keyExtractor={(item,index) => index.toString()}
                      renderItem={this._renderItem}
                      ListEmptyComponent={() => <View><Text>Veri Yok </Text></View>}
                      ListFooterComponent={this.renderFooter}
                      onEndReachedthreshold={0.4}
                      onEndReached={this.loadMore}
                  />

            </SafeAreaView>
      )
    }
}
