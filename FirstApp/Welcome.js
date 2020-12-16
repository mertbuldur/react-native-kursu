import React from 'react';
import { View , Text } from  'react-native';
import PropTypes from 'prop-types';
export default class index extends React.Component
{
    render(){
        return <View>
                    <Text>{this.props.name}</Text>
                    <Text>{this.props.age}</Text>
               </View>
    }
}

index.propTypes = {
  name:PropTypes.string.isRequired ,// | array | bool | func | number | object | string |symbol | element | node
  age:PropTypes.number.isRequired
};
index.defaultProps = {
    name:'Ali Veli',
    age:25
}
