import React from 'react';
import {SafeAreaView,View,Text} from 'react-native';
import StarRating from "react-native-star-rating";
export default class index extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            star: 2
        }
    }

    render() {
        return <SafeAreaView>
            <View style={{ marginTop:50,padding:15}}>
                 <StarRating
                    maxStars={5}
                    rating={this.state.star}
                    disabled={false}
                    selectedStar={ (star) => this.setState({ star})}
                    emptyStarColor={"#ddd"}
                    fullStarColor={"green"}
                 />
            </View>
        </SafeAreaView>
    }
}
